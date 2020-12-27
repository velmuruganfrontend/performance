<!-- ===========================================================================
// cb-title     =   Page Level Titles (Title, Twitter, OG)
// cb-desc      =   Page Level Descriptions (Description, Twitter, OG)
// cb-image     =   Page Level Images (Twitter, OG)
// cb-style     =   Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script   =   Page Level Head Script. Using this tag to put head level scripts
// cb-body-script   =   Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex   =   Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header       =   App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
// app-footer       =   App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
	<div form-container class="formContainer"> 
		<div inline-form class="inlineForm"></div>
		<div form-overlay class="formOverlay">
			<div form-close class="formClose">+</div>
		</div>
		<div demo-form class="demoForm"></div>
	</div>
</template>
<!-- ===========================================================================
End: Main Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts Section
============================================================================ -->
<script>
	const axios = require('axios');
	var clearbit = require('clearbit')('sk_aef477c04904e679852167ea2bf6582c');
    export default {
		props: ['samePage'],
		data: function () {
			return {
				isThisSamePage: this.samePage ? this.samePage : false
			}
		},
        // jQuery interaction should be placed inside the mounted method
        mounted() {
			if(!this.isThisSamePage){
				$('.formContainer').addClass('navigateToDemo');
			}
			$('.formClose').on('click', function () {
				$('.demoForm,.formOverlay').removeClass('active');
				$("body").removeClass("overFlowHidden");
			});
            // Start HS Inline form Script
            var scriptTag = document.createElement("script");
            scriptTag.type = "text/javascript";
            var hsScript = document.createTextNode(
				`hbspt.forms.create({
					portalId: "3732359",
					formId: "3fa2edf3-0b43-410b-a777-c8a9fc513432",
					translations: {
						en: {
							forbiddenEmailDomain: "Apologies, we do not accept free emails. Please enter your business email to schedule a call."
						}
					},
					onFormSubmit: function($form){
						preFillSessionInfo(),preFillClearbitInfo($form.find("input[name=email]").val())
					},
					onFormSubmitted: function(){
						if($('.formContainer').hasClass('navigateToDemo')){
							var userEmail = $('.demoForm input[name="email"]').val();
							sessionStorage.setItem("user_email_id", userEmail);
							$('.formContainer').hide();
							$('.demoCTA')[0].click();
						}else{
							$(".demoForm,.formOverlay").addClass("active");
							$("body").addClass("overFlowHidden");
						}
					},
				});`
			);
            scriptTag.appendChild(hsScript);

            var inlineForm = document.getElementsByClassName('inlineForm')[0];
            inlineForm.appendChild(scriptTag);
			// End HS Inline form Script

			// Start HS Demo form Script
			var demoScriptTag = document.createElement("script");
            demoScriptTag.type = "text/javascript";
            var hsDemoScript = document.createTextNode(
				`var data;
				hbspt.forms.create({
					portalId: "3732359",
					formId: "5a55ee7b-b4f4-479d-8918-18827e2c1153",
					translations: {
						en: {
							forbiddenEmailDomain: "Apologies, we do not accept free emails. Please enter your business email to schedule a call."
						}
					},
					onFormSubmit: function($form){
						var formDataArray = $form.serializeArray();function objectifyForm(formDataArray){var returnArray = {};for (var i = 0; i < formDataArray.length; i++){returnArray[formDataArray[i]["name"]] = formDataArray[i]["value"];}return returnArray;};data = objectifyForm(formDataArray);
					},
					onFormSubmitted: function(){
						$(".inlineForm").css("opacity","0");
						ChiliPiper.submit("chargebee","demo-test-router", {map: true, lead:data});
					}
				});`
			);
            demoScriptTag.appendChild(hsDemoScript);

            var demoForm = document.getElementsByClassName('demoForm')[0];
			demoForm.appendChild(demoScriptTag);
			// End HS Demo form Script
			window.preFillSessionInfo = function(){
				$('.demoForm input[name="calendly_source_fs_"]').val('inline-website').change()

				var ip_address = sessionStorage.getItem("ip_add") ? sessionStorage.getItem("ip_add") : '';
				$('.demoForm input[name="ip_address"]').val(ip_address).change()

				axios.get('https://freegeoip.live/json/')
				.then(function (response) {
					var countryName = response.data.country_name;
					$('.demoForm input[name="ip_country_fs_"]').val(countryName).change()
				})

				var tysource = sessionStorage.getItem("tysource") ? sessionStorage.getItem("tysource") : '';
				$('.demoForm input[name="utm_source_cbwebsite"]').val(tysource).change()

				var tymedium = sessionStorage.getItem("tymedium") ? sessionStorage.getItem("tymedium") : '';
				$('.demoForm input[name="utm_medium_cbwebsite"]').val(tymedium).change()

				var campaign = localStorage.getItem('campaign') ? localStorage.getItem('campaign') : '';
				$('.demoForm input[name="utm_campaign_cbwebsite"]').val(campaign).change()

				var utm_term = localStorage.getItem('utm_term') ? localStorage.getItem('utm_term') : '';
				$('.demoForm input[name="utm_keyword_cbwebsite"]').val(utm_term).change()

				var utm_content = localStorage.getItem('utm_content') ? localStorage.getItem('utm_content') : '';
				$('.demoForm input[name="utm_content_cbwebsite"]').val(utm_content).change()

				var gclid = localStorage.getItem('gclid') ? localStorage.getItem('gclid') : '';
				$('.demoForm input[name="utm_gclid"]').val(gclid).change()
			}
			window.preFillClearbitInfo = function(userEmail = 	''){
				
				$('.demoForm input[name="email"]').val(userEmail).change()
				
				clearbit.Enrichment.find({email: userEmail, stream: true})
				.then(function (response) {
					
					// console.log(response)
					
					var person = response.person
					var company = response.company
					
					if(person){
						var firstName = person.name.givenName ? person.name.givenName : '';
						$('.demoForm input[name="firstname"]').val(firstName).change()
					}
					
					if(company){
						var name = company.name ? company.name : '';
						var tags = company.tags ? company.tags.includes("SAAS") ? 'SAAS' : '' : '';
						var domain = company.domain ? company.domain : '';
						
						$('.demoForm input[name="clearbit_reveal_company_name"]').val(name).change()
						$('.demoForm input[name="clearbit_reveal_company_tags"]').val(tags).change()
						$('.demoForm input[name="website"]').val(domain).change()
						
						if(company.metrics){
							var employeesRange = company.metrics.employeesRange ? company.metrics.employeesRange : '';
							var employees = company.metrics.employees ? company.metrics.employees : '';
							var estimatedAnnualRevenue = company.metrics.estimatedAnnualRevenue ? company.metrics.estimatedAnnualRevenue : '';
							
							$('.demoForm input[name="clearbit_reveal_company_employee_range"]').val(employeesRange).change()
							$('.demoForm input[name="clearbit_reveal_total_employees"]').val(employees).change()
							$('.demoForm input[name="clearbit_reveal_company_estimated_annual_revenue"]').val(estimatedAnnualRevenue).change()
						}
						if(company.geo){
							var country = company.geo.country ? company.geo.country : '';
							
							$('.demoForm input[name="clearbit_reveal_company_country"]').val(country).change()
						}
					}
					
				})
				.catch(function (err) {
					console.error(err);
				});
			}
        }
    }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<style>
	body.overFlowHidden{
		overflow-y: hidden;
	}
	body.overFlowHidden .l-header{
		display: none !important;
	}
	[inline-form] form * {
		box-sizing: border-box;
	}

	[inline-form] form {
		font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		display: grid;
		position: relative;
		grid-template-columns: 1fr auto;
		align-items: center;
		justify-content: space-between;
		border: 1px solid #00000a;
		border-radius: 4px;
	}

	[inline-form] form [id^="label-email"] {
		display: none;
	}

	[inline-form] form .hs-error-msgs {
		color: #E71324;
		list-style-type: none;
		font-weight: normal;
		padding: 0;
		text-align: left;
		font-size: 14px;
		position: absolute;
		margin-top: 60px !important;
		left: 0;
		top: 0;
	}

	[inline-form] form .hs-error-msgs .hs-error-msg {
		margin-bottom: 0;
	}

	[inline-form] form .hs-form-field {
		position: relative;
		z-index: 8;
	}

	[inline-form] form .hs_error_rollup {
		display: none;
	}

	[inline-form] form input[type="email"] {
		background: #ffffff;
		padding: 14px 16px;
		margin: 0;
		font-size: 14px;
		width: 100%;
		line-height: 16px;
		border-radius: 3px 0 0 3px;
	}

	[inline-form] form input,
	[inline-form] form input:hover,
	[inline-form] form input:active,
	[inline-form] form input:focus {
		outline: none;
		border: none;
		box-shadow: none;
	}

	[inline-form] form input[type="submit"] {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-color: #500ad2;
		margin: 0;
		padding: 8px 44px 8px 24px;
		font-size: 16px;
		font-weight: 600;
		color: #ffffff;
		position: relative;
		border-radius: 0 3px 3px 0;
		border: none;
		line-height: 28px;
	}

	@media (max-width: 767px) {
		[inline-form] form input[type="submit"] {
			color: transparent;
			max-width: 40px;
			padding: 8px 24px;
		}
	}

	[inline-form] form .hs-submit .actions {
		position: relative;
		display: inline-block;
	}

	[inline-form] form .hs-submit .actions:after {
		content: '';
		transition: .3s ease;
		background: url("data:image/svg+xml, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%09%3Cpath%20d%3D%22M13.025%201l-2.847%202.828%206.176%206.176h-16.354v3.992h16.354l-6.176%206.176%202.847%202.828%2010.975-11z%22%20fill%3D%22rgb(255%2C255%2C255)%22%2F%3E%0A%3C%2Fsvg%3E") no-repeat;
		position: absolute;
		background-size: 12px 12px;
		background-position: 50%;
		right: 0;
		top: 50%;
		margin-top: -5px;
		margin-right: 26px;
		padding: 6px 6px;
	}

	[inline-form] form .hs-submit .actions:hover:after {
		margin-right: 20px;
		transform: scale(1.2);
	}

	@media (max-width: 767px) {
		[inline-form] form .hs-submit .actions:after {
			margin-right: 14px;
		}
	}

	.submitted-message.hs-main-font-element {
		background-color: #cecef9;
		border-radius: 6px;
		padding: 20px;
		text-align: left;
	}
	.formContainer{
		max-width: 420px;
	}
	[demo-form]{
		text-align: left;
	}
	[demo-form] input[type="text"],
	[demo-form] input[type="email"],
	[demo-form] input[type="tel"] {
		color: #00000A;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		font-size: 14px;
    	line-height: 20px;
		border: 1px solid #DDE3EC;
		border-radius: 2px;
		background-color: #ffffff;
		padding: 10px 14px;
		width: 100%;
	}

	[demo-form] label {
		font-size: 14px;
    	line-height: 20px;
		font-weight: 500;
    	color: #00000a90;
	}

	[demo-form] .hs-form-field:not(:last-child) {
		margin-bottom: 12px;
	}

	[demo-form] .hs-error-msgs {
		padding: 0;
		margin: 0;
		list-style: none;
		margin-top: 4px;
	}

	[demo-form] .hs-error-msg {
		margin-bottom: 0;
		color: #fa6164;
		font-size: 12px;
		line-height: 18px;
		font-weight: 400;
	}

	[demo-form] .inputs-list {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	[demo-form] .input label.error,
	[demo-form] .hs_error_rollup {
		display: none !important;
	}

	[demo-form] .multi-container {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: 30px;
	}

	[demo-form] .hs-fieldtype-intl-phone select {
		height: 42px;
		background-color: transparent;
		box-shadow: none;
		border: 1px solid #DDE3EC;
		font-size: 14px;
    	line-height: 20px;
	}

	[demo-form] input:focus,
	[demo-form] select:focus {
		outline: none;
		box-shadow: none;
		border-color: #666678;
	}

	[demo-form] .hs-form-required {
		margin-left: 4px;
		color: #fc9091;
	}
	.demoForm {
		position: fixed;
		z-index: 99999;
		left: 50%;
    	top: 50%;
		transform: translate(-50%, -50%);
		transition: .25s ease-in;
		opacity: 0;
		pointer-events: none;
		width: 100%;
    	max-width: 420px;
	}
	.demoForm.active{
		pointer-events: initial;
		opacity: 1;
	}
	.demoForm form {
		background-color: #fff;
		padding: 15px;
		z-index: 999;
		width: 100%;
	}
	@media (min-width: 768px) {
		.demoForm form {
			padding: 20px 30px 30px 30px;
			border: 1px solid rgb(206, 232, 255);
			border-radius: 6px;
			box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
		}
	}
	[demo-form] form input[type="submit"]{
		background-color: #500ad2;
		margin: 0;
		padding: 8px 24px;
		font-size: 16px;
		font-weight: 600;
		color: #fff;
		position: relative;
		border-radius: 3px;
		border: none;
		line-height: 28px;
		width: 100%;
	}
	[demo-form] form .hs-submit .actions{
		margin-top: 24px;
		display: block;
	}
	[form-overlay]{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255,255,255,.85);
		z-index: 9999;
		display: none
	}
	[form-overlay].active{
		display: block
	}
	[form-close]{
		transform: rotate(45deg);
		position: absolute;
		right: 0;
		top: 0;
		font-size: 3em;
		opacity: .8;
		line-height: 28px;
		margin-top: 30px;
		margin-right: 30px;
	}
	[form-close]:hover{
		opacity: 1;
		cursor: pointer;
	}
	@media (max-width: 767px) {
		[form-close]{
			margin-top: 10px;
			margin-right: 10px;
		}
		.demoForm.active{
			transform: scale(1) translate(-50%,-70%);
		}
	}
</style>