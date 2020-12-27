;(function($){
	"use strict";
	
	var tx = {};

	var TransactionFeeCalculator = function(){
		var _this = this;
		this.data = undefined;
		this.calc_common = undefined;
		this.option = $.extend(true,{},defaultSettings());
		
		$.extend(TransactionFeeCalculator.prototype, tx);
		
		$.when(this.getJsonData()).then(function( data, textStatus, jqXHR ) {
		  _this.data = data.calc_details; 	
		  _this.calc_common = data.calc_common;
		  _this.initialize();
		});

	};	
	
	tx.initialize = function(){
		var _this = this;

		_this.selectedCountryCode = _this.getDefaultCountryCode();
		_this.avgTransactionValue = undefined;
		_this.avgTransactionSize = undefined;
		_this.countryDetails = [];
		
		_this.result = [];

		_this.setCountryDetails();
		
		$(_this.option.countrySelector).click(function(){
			_this.selectedCountryCode = $(this).attr(_this.option.countryCodeAttr);
			_this.setCountryDetails();
			_this.execute();
		});

		$('#range-increment').click(function(){
			var range_value = parseInt($(_this.option.avgTransactionSizeId).val());
			if(!isNaN(range_value)){
				$(_this.option.avgTransactionSizeId).val(range_value + 1);	
				_this.execute();
			}
			
		});

		$('#range-decrement').click(function(){
			var range_value = parseInt($(_this.option.avgTransactionSizeId).val());
			if(!isNaN(range_value) && range_value > 1){
				$(_this.option.avgTransactionSizeId).val(range_value - 1);
				_this.execute();
			}
		});

		$(_this.option.formSubmitId).on('click',function(){
			_this.execute();			
		});


		$(_this.option.avgTransactionValueId).keyup(function(){
			$(_this.option.avgTxnValueErrorId).text('');
			_this.execute();
		});

		$(_this.option.avgTransactionSizeId).keyup(function(){
			$(_this.option.avgTxnSizeErrorId).text('');
			_this.execute();
		});
		

	};

	tx.getDefaultCountryCode = function(){
		var hashValue = window.location.hash.slice(1);
		var defaultCountryCode = hashValue.length !== 0 ? hashValue : this.option.countryCode;
		$('[' + this.option.countryCodeAttr +'='+ defaultCountryCode +']').click();
		return defaultCountryCode;

	};

	tx.execute = function(){
		this.result = [];

		this.setTxnInputs();
			
		if(this.validateTransactionInputs()){
			this.calulateGatewayFee();	
			this.renderResult();
			this.postResultRender();
		}
	};

	tx.setTxnInputs = function(){
		this.avgTransactionValue = $(this.option.avgTransactionValueId).val();
		this.avgTransactionSize = $(this.option.avgTransactionSizeId).val();
	};

	tx.setCountryDetails = function(){
		var _this = this;
		_this.countryDetails = _this.data.filter(function(element){
				return element.code === _this.selectedCountryCode;
			});

		if(this.countryDetails.length === 1){
			_this.option.currencyClass = _this.countryDetails[0].currency;
			$(_this.option.txtValueLabelId).attr('class','').addClass(_this.option.currencyClass);
		}
	};

	tx.validateTransactionInputs = function(){
		var validateFlag = true;

		if(typeof this.selectedCountryCode === 'undefined'){
			validateFlag = validateFlag & false;
		}

		if(isNaN(this.avgTransactionValue) || this.avgTransactionValue <= 0){
			$(this.option.avgTxnValueErrorId).text(this.option.avgTxnValueErrorMsg);
			validateFlag = validateFlag & false;
		} 

		if(isNaN(this.avgTransactionSize) || this.avgTransactionSize <= 0 || this.avgTransactionSize % 1 !== 0){
			$(this.option.avgTxnSizeErrorId).text(this.option.avgTxnSizeErrorMsg);
			validateFlag = validateFlag & false;
		} 

		if(this.countryDetails.length !== 1){
			validateFlag = validateFlag & false;
		}

		return validateFlag;   
	};

	tx.calulateGatewayFee = function(){
		var _this = this;
	
		_this.totalTransactionAmt = _this.avgTransactionValue * _this.avgTransactionSize;

		$.each(_this.countryDetails[0].gateways,function(index,gateway){
			var _gateway = _this.calc_common[gateway.code];
			var gatewayDetails = { gatewayName : _gateway.name,
								   imageUrl : _gateway.imageUrl,			
								   successRatio : _gateway.success_ratio,
								   settleTime : _gateway.settle_time,
								   statusUrl : _gateway.status_url,	
								 };

			if(typeof gateway.plans.domestic !== 'undefined'){
				gatewayDetails.domestic = _this.calulatePlanFee(_this.totalTransactionAmt,gateway.plans.domestic);
			} else{
				gatewayDetails.domestic = {};
			} 
			
			if(typeof gateway.plans.international !== 'undefined'){
				gatewayDetails.international = _this.calulatePlanFee(_this.totalTransactionAmt,gateway.plans.international);
			} else{
				gatewayDetails.international = {};
			} 

			if(typeof gateway.chargeback_fee !== 'undefined'){
				gatewayDetails.chargebackFee = parseInt(gateway.chargeback_fee).toLocaleString();
			}

			gatewayDetails.pricingUrl = gateway.url;
			gatewayDetails.currencyClass = _this.countryDetails[0].currency;
			
			_this.result.push(gatewayDetails);
				
		});

	};

	tx.calulatePlanFee = function(totalTransactionAmt,plans){
		var _this = this;
		var netAmt = undefined;
		var fee = {};

		$.each(plans,function(index,plan){

			switch(plan.fee_type){
				case _this.option.fee_type.flat_fee : 
					netAmt = _this.calculateFlatFee(totalTransactionAmt,plan);
					break;
				case _this.option.fee_type.group_fee:
					netAmt = _this.calculateGroupFee(totalTransactionAmt,plan);
					break;
				default : 
					netAmt = undefined;		
			}

			if(typeof netAmt !== 'undefined'){
				netAmt = Math.floor(netAmt).toLocaleString();

				if(plan.with_merchant_account === true){
				fee.withMerchantAccount = netAmt;
				} else{
					fee.withoutMerchantAccount = netAmt;
				}
			}

		});	

		return fee;
		
	};

	tx.calculateFlatFee = function(totalTrxAmt,plan){
		
		var netAmt = totalTrxAmt - ((plan.percentage/100) * totalTrxAmt) - (plan.auth * this.avgTransactionSize);
		
		if(typeof plan.monthly_fee !== 'undefined'){
			 netAmt -= plan.monthly_fee;
		} 

		return netAmt;
	};

	tx.calculateGroupFee = function(totalTrxAmt,plan){
		var _this = this;
		var netAmt = undefined;

		$.each(plan.range,function(index,element){
			if(typeof element.upper_limit === 'undefined' && totalTrxAmt >= element.lower_limit){
				netAmt = _this.calculateFlatFee(totalTrxAmt,element);
				return false;
			}
			else if(totalTrxAmt <= element.upper_limit && totalTrxAmt >= element.lower_limit){
				netAmt = _this.calculateFlatFee(totalTrxAmt,element);
				return false;
			}
		});

		return netAmt;
	};

	tx.getJsonData = function(){
		return $.getJSON(this.option.transactionJsonURL);
	};


	tx.populateDropDownMenu = function(){
		var _this = this;
		var renderedHtml = '';
		$.each(_this.data,function(index,value){
			 renderedHtml += Mustache.render(_this.option.countryOptionTemplate, value);
		});
		$(_this.option.countrySelectId).append(renderedHtml);
	};

	tx.renderResult = function(){
		$(this.option.currencyLabelId).attr('class','').addClass(this.option.currencyClass);
		$(this.option.totalAmtLabelId).text(Math.floor(this.totalTransactionAmt).toLocaleString());
		$(this.option.resultTemplateId).html(Mustache.render(this.option.resultTemplate,this.result));
	};

	tx.postResultRender = function(){
		$('#fee-form').removeClass('col-md-offset-4 col-sm-offset-3');
		$('#fee-result-container').show();	
	};

	var defaultSettings = function(){

		return {
			transactionJsonURL : '/static/resources/tools/evaluator-tool/transaction.json?v=1.0',  			
			countrySelector : '#country-select li',
			countryCodeAttr : 'data-cb-country-code',
			avgTransactionValueId : '#avgTransactionValue',
			avgTransactionSizeId : '#avgTransactionSize',
			txtValueLabelId : '#transactionValueCurrencyLabel',
			resultTemplateId : '#fee-result-template',
			currencyLabelId : '#currencyLabel',
			currencyClass : 'test-usd',
			countryCode : 'us',	
			totalAmtLabelId : '#totalAmtLabel',
			formSubmitId : '#fee-form-submit',
			avgTxnValueErrorId :'#avgTransactionValueError',
			avgTxnSizeErrorId :'#avgTransactionSizeError',
			avgTxnValueErrorMsg :'Please input a valid number.',
			avgTxnSizeErrorMsg :'Please input a valid number.',
			fee_type : { flat_fee : 'flat_fee', group_fee : 'group_fee'},
			resultTemplate : '{{#.}} <tr><td><a href="{{pricingUrl}}" target="_blank" class="fc-t-detail__logo"> <img src={{imageUrl}} alt="" class="desaturate"> </a></td> <td><div class="fc-t-detail__value"> {{#domestic}} <div class="fc-t-detail__subtitle" title="{{withMerchantAccount}}"> {{#withMerchantAccount}} <span class="currency-label {{currencyClass}}"></span>{{withMerchantAccount}} {{/withMerchantAccount}} {{^withMerchantAccount}}  --- {{/withMerchantAccount}} </div> {{/domestic}}  {{#international}} <div class="fc-t-detail__subtitle fc-t-detail_inter" title="{{withMerchantAccount}}"> {{#withMerchantAccount}} <span class="currency-label {{currencyClass}}"></span>{{withMerchantAccount}} {{/withMerchantAccount}} {{^withMerchantAccount}} --- {{/withMerchantAccount}} </div> {{/international}} </div></td> <td>{{#chargebackFee}} <span class="{{currencyClass}}"></span>{{chargebackFee}} {{/chargebackFee}} {{^chargebackFee}} --- {{/chargebackFee}}</td> <td>{{#successRatio}} {{successRatio}} {{/successRatio}} {{^successRatio}} --- {{/successRatio}}</td> <td>{{#settleTime}} {{settleTime}} {{/settleTime}} {{^settleTime}} --- {{/settleTime}}</td> <td>{{#statusUrl}}<a href="{{statusUrl}}" target="_blank" title="Click here to view {{gatewayName}} status."> Status </a>{{/statusUrl}}</td> </tr> {{/.}}'
		};
	};

	$(window).load(function(){
		new TransactionFeeCalculator();
	});

	
})(window.jQuery);