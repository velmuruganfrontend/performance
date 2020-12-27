<template>
	<div class="eln-form">
		<div class="eln-form__container eln-form__container--back">
			<div class="eln-profile">
				<div class="eln-profile__content">
					<div class="eln-profile__header">
						<div class="eln-profile__img"></div>
						<div class="eln-profile__data">
							<div class="eln-profile__name">
								Phil
							</div>
							<div class="eln-profile__label">
								The Philosopher
							</div>
						</div>
					</div>
					<hr>
					<div class="eln-profile__body">
						<div class="eln-profile__title">
							{{ currency }} {{ (titlePrice).toFixed(2) }}<span v-if="pricingModel == 'Recurring'">/mo</span><span v-if="pricingModel == 'One time fee'"> - Full Access</span><span v-if="pricingModel == 'Usage based'">/lesson</span>
						</div>
						<div class="eln-profile__label">
							Philosophy 101 - Course
						</div>
						<hr>
						<ul class="eln-list">
							<li class="eln-list__item">
								<div>Base</div>
								<div>{{ currency }} {{ (titlePrice).toFixed(2) }}</div>
							</li>
						</ul>
						<ul class="eln-list">
							<li class="eln-list__item" v-for="(addon, index) in addons" :key="index">
								<div>{{ addon }}</div>
								<div>+ {{ currency }} {{ (addonPrice).toFixed(2) }}</div>
							</li>
						</ul>
						<ul class="eln-list" v-if="discounts" style="margin-top: 24px;">
							<li class="eln-list__item">
								<div>Discounts</div>
								<div style="color: #de165e;">- {{ currency }} 10.00</div>
							</li>
						</ul>
					</div>
				</div>
				<button class="eln-profile__action">
					<span>Proceed ({{ currency }} {{ (totalPrice).toFixed(2) }}/mo)</span>
				</button>
			</div>
		</div>
		<div class="eln-form__container eln-form__container--front">
			<div v-if="step == 1" class="eln-form__screen el-form__screen--one">
				<div class="eln-form__content">
					<div class="eln-form__heading">Pick a pricing model</div>
					<div class="eln-form__group">
						<input type="radio" id="Recurring" checked value="Recurring" v-model="pricingModel">
						<label for="Recurring">
							<span>Recurring</span>
							<span>Charge a single price on a recurring basis.</span>
						</label>
					</div>
					<div class="eln-form__group">
						<input type="radio" id="One time fee" value="One time fee" v-model="pricingModel">
						<label for="One time fee">
							<span>One time fee</span>
							<span>Charge for one-time purchases.</span>
						</label>
					</div>
					<div class="eln-form__group">
						<input type="radio" id="Usage based" value="Usage based" v-model="pricingModel">
						<label for="Usage based">
							<span>Usage based</span>
							<span>Calculate billing based on your customers’ product usage.</span>
						</label>
					</div>
				</div>
			</div>
			<div v-if="step == 2" class="eln-form__screen el-form__screen--two">
				<div class="eln-form__content">
					<div class="eln-form__heading">&#127758; Choose the country you're selling to:</div>
					<div class="eln-form__group--inline">
						<div class="eln-form__group">
							<input type="radio" id="US" value="$USD" checked v-model="currency">
							<label for="US">US</label>
						</div>
						<div class="eln-form__group">
							<input type="radio" id="UK" value="£GBP" v-model="currency">
							<label for="UK">UK</label>
						</div>
						<div class="eln-form__group">
							<input type="radio" id="Germany" value="€EUR" v-model="currency">
							<label for="Germany">Germany</label>
						</div>
					</div>
					<hr style="opacity: 0;">
					<div class="eln-form__heading">Recommended Addons</div>
					<div class="eln-form__group">
						<input type="checkbox" id="Quizzes" checked value="Quizzes" v-model="addons">
						<label for="Quizzes">Quizzes</label>
					</div>
					<div class="eln-form__group">
						<input type="checkbox" id="Test Papers" value="Test Papers" v-model="addons">
						<label for="Test Papers">Test Papers</label>
					</div>
					<div class="eln-form__group">
						<input type="checkbox" id="Ebooks and Guides" value="Ebooks and Guides" v-model="addons">
						<label for="Ebooks and Guides">Ebooks and Guides</label>
					</div>
					<div class="eln-form__group">
						<input type="checkbox" id="Discussions" value="Discussions" v-model="addons">
						<label for="Discussions">Discussions</label>
					</div>
				</div>
			</div>
			<div v-if="step == 3" class="eln-form__screen el-form__screen--three">
				<div class="eln-form__content">
					<div class="eln-form__heading">Commitment and coupons</div>
					<div class="eln-form__group--inline eln-form__group--inline-row" v-bind:class="{ 'eln-form__group--disabled' : !showCommitment }">
						<div class="eln-form__group">
							<input type="radio" id="Annual" value="Annual" v-model="commitment">
							<label for="Annual">Annual</label>
						</div>
						<div class="eln-form__group">
							<input type="radio" id="Quarterly" value="Quarterly" v-model="commitment">
							<label for="Quarterly">Quarterly</label>
						</div>
						<div class="eln-form__group">
							<input type="radio" id="Monthly" value="Monthly" checked v-model="commitment">
							<label for="Monthly">Monthly</label>
						</div>
					</div>
					<hr>
					<div class="eln-form__group" style="margin-top: 40px;" v-bind:class="{ 'eln-form__group--disabled' : disableDiscounts }">
						<input type="checkbox" id="Discounts" checked value="Discounts" v-model="discounts">
						<label for="Discounts">
							<span>Discounts</span>
							<span>Adjust billing with discounts and trials.</span>
						</label>
					</div>
				</div>
			</div>
			<div class="eln-form__actions">
				<span v-if="step != 1" class="eln-form__action--left" @click.prevent="prev()"></span>
				<span v-if="step != 3" class="eln-form__action--right" @click.prevent="next()"></span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    data() {
        return {
            step: 1,
            currency: '$USD',
            addons: ['Quizzes'],
            pricingModel: 'Recurring',
            commitment: 'Monthly',
            discounts: true,
            showCommitment: true,
            disableDiscounts: false,
            totalPrice: 0,
			titlePrice: 0,
			addonPrice: 5
        }
    },
    methods:{
        prev() {
            this.step--;
        },
        next() {
            this.step++;
        },
        calculateTotalPrice() {
			// console.log("Calculated Total Price")
			if(this.commitment == 'Monthly'){
				this.addonPrice = 5
			}else if(this.commitment == 'Quarterly'){
				this.addonPrice = 4
			}else{
				this.addonPrice = 3
			}
			let totalAddonPrice = this.addons.length * this.addonPrice;
            this.totalPrice = totalAddonPrice + this.titlePrice
            if(this.discounts){
                this.totalPrice = this.totalPrice - 10.00
            }
        },
        calculateTitlePrice(){
            // console.log("Calculated Base Price")
            if(this.pricingModel == 'Recurring'){
                this.showCommitment = true
                this.disableDiscounts = false
                this.discounts = true
                if(this.commitment == 'Monthly'){
                    if(this.currency == '$USD'){
                        this.titlePrice = 15.00
                    }else if(this.currency == '£GBP'){
                        this.titlePrice = 12.00
                    }else{
                        this.titlePrice = 13.00
                    }
                }else if(this.commitment == 'Quarterly'){
                    if(this.currency == '$USD'){
                        this.titlePrice = 13.50
                    }else if(this.currency == '£GBP'){
                        this.titlePrice = 10.50
                    }else{
                        this.titlePrice = 11.50
                    }
                }else{
                    if(this.currency == '$USD'){
                        this.titlePrice = 12.00
                    }else if(this.currency == '£GBP'){
                        this.titlePrice = 9.00
                    }else{
                        this.titlePrice = 10.00
                    }
                }
            }else if(this.pricingModel == 'One time fee'){
                this.showCommitment = false
                this.disableDiscounts = false
                this.discounts = true
                if(this.currency == '$USD'){
                    this.titlePrice = 150.00
                }else if(this.currency == '£GBP'){
                    this.titlePrice = 140.00
                }else{
                    this.titlePrice = 130.00
                }
            }else{
                this.disableDiscounts = true
                this.showCommitment = true
                this.discounts = false
                this.titlePrice = 5.00
            }
        }
    },
    watch: {
        currency: function(val){
            this.calculateTitlePrice()
            this.calculateTotalPrice()
        },
        addons: function(){
            this.calculateTotalPrice()
		},
		addonPrice: function(){
			this.calculateTotalPrice()
		},
        pricingModel: function (val) {
            this.calculateTitlePrice()
            this.calculateTotalPrice()
        },
        commitment: function(val){
            this.calculateTitlePrice()
            this.calculateTotalPrice()
        },
        discounts: function(val){
            this.calculateTotalPrice()
        }
    },
    mounted() {
        this.calculateTitlePrice()
        this.calculateTotalPrice()
    }
}
</script>
<style>
	.eln-form{
        position: relative;
        min-height: 580px;
	}
	.eln-form *{
		line-height: normal;
	}
	.eln-form hr{
		margin: 16px 0 24px 0;
	}
	.eln-form__container{
        width: 100%;
		max-width: 360px;
		background: rgb(255, 255, 255);
		border-radius: 12px;
		box-shadow: 7px 48px 48px 0px rgba(0, 0, 0, 0.13), -3px 4px 28px 0px rgba(0, 0, 0, 0.06);
		padding: 16px 24px;
		padding-bottom: 50px;
		min-height: 400px;
		transition: all .25s;
		position: absolute;
		left: 0;
		top: 0;
	}
	.eln-form__container--back {
		display: grid;
		transform: scale(.95);
		padding: 24px;
		min-height: 460px;
		left: 140px;
	}
	.eln-form__container--front {
		transform: scale(1);
		top: 160px;
	}
	.eln-form__container--back:hover{
		position: relative;
		transform: scale(1);
		z-index: 1;
	}
	.eln-form__container--back:hover + .eln-form__container--front{
		transform: scale(.95);
	}
	.eln-form__actions {
		position: absolute;
		right: 0;
		bottom: 0;
		margin-right: 20px;
		margin-bottom: 20px;
		min-width: 40px;
	}
	.eln-form__actions span{
		cursor: pointer;
	}
	.eln-form__action--left:after,.eln-form__action--right:after{
		content: '';
		transition: all .3s ease-in-out;
		background-image: url('data:image/svg+xml, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%09%3Cpath%20d%3D%22M13.025%201l-2.847%202.828%206.176%206.176h-16.354v3.992h16.354l-6.176%206.176%202.847%202.828%2010.975-11z%22%20fill%3D%22rgb(0%2C15%2C240)%22%2F%3E%0A%3C%2Fsvg%3E');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		padding: 0px 7px;
	}
	.eln-form__action--left{
		transform: rotate(180deg);
		float: left;
	}
	.eln-form__action--right{
		float: right;
	}


	.eln-form__heading{
		color: rgb(120, 120, 120);
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 12px;
	}
	.eln-form__group{
		position: relative;
	}
	.eln-form__group:not(:last-child){
		margin-bottom: 24px;
	}
	.eln-form__group span{
		display: block;
	}
	.eln-form__group span:first-child{
		color: rgb(0, 0, 10);
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 8px;
	}
	.eln-form__group span:last-child{
		color: rgb(102, 102, 108);
		font-size: 12px;
		font-weight: normal;
		max-width: 220px;
		line-height: 18px;
	}

	.eln-profile{
		display: grid;
    	grid-template-rows: 1fr auto;
		grid-gap: 15px;
	}
	.eln-profile__header{
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: 30px;
		align-items: center;
	}
	.eln-profile__img{
		background: url('/static/website/version/images/e-learning/profile.svg') no-repeat;
		width: 60px;
		height: 50px;
	}
	.eln-profile__data{
		text-align: right;
	}
	.eln-profile__name{
		color: rgb(0, 0, 10);
		font-size: 16px;
		font-weight: bold;
	}
	.eln-profile__label{
		color: rgb(0, 0, 10);
		font-size: 12px;
	}
	.eln-profile__title{
		color: rgb(0, 0, 10);
		font-size: 24px;
		font-weight: bold;
		margin-top: 30px;
		margin-bottom: 8px;
	}
	.eln-profile__action {
		background: #4CAF50;
		border-radius: 3px;
		text-align: center;
		padding: 16px;
		color: rgb(255, 255, 255);
		font-size: 16px;
		font-weight: bold;
		border: none;
		outline: none;
		transition: all .5s;
		cursor: pointer;
		position: relative;
		transition: all .5s;
	}
	.eln-profile__action:hover{
		background-color: green;
	}
	.eln-profile__action:focus{
		text-align: left;
	}
	.eln-profile__action:focus span{
		visibility: hidden;
	}
	.eln-profile__action:focus:after{
		content: "";
		padding: 2px 6px;
		border-left: 2px solid #fff;
		border-bottom: 2px solid #fff;
		transform: rotate(-45deg);
		position: absolute;
		right: 50%;
		top: 21px;
		margin-right: -5px;
	}
	.eln-profile__action:focus:before{
		content: "";
		padding: 12px;
		border: 2px solid #fff;
		position: absolute;
		right: 50%;
		border-radius: 50%;
		top: 11px;
		margin-right: -12px;
	}
	.eln-form__group--inline {
		display: grid;
		grid-template-columns: auto auto 1fr;
		text-align: center;
		align-items: center;
		grid-gap: 12px;
	}
	.eln-form__group--inline.eln-form__group--inline-row{
		display: block;
	}
	.eln-form__group--inline .eln-form__group{
		margin-bottom: 0;
		font-size: 16px;
		font-weight: bold;
		border-radius: 4px;
	}
	.eln-form__group--inline.eln-form__group--inline-row .eln-form__group{
		text-align: left;
	}
	.eln-form__group--inline.eln-form__group--inline-row .eln-form__group:not(:last-child){
		margin-bottom: 12px;
	}
	.eln-form__group--inline .eln-form__group label{
		padding: 14px 40px 14px 18px;
		display: block;
		position: relative;
		overflow: hidden;
		cursor: pointer;
		margin: 0;
	}
	.eln-form__group--inline .eln-form__group:hover{
		filter: brightness(0.95);
	}
	.eln-form__group input[type="radio"],.eln-form__group input[type="checkbox"] {
		opacity: 0;
		position: absolute;
	}
	.eln-form__group input+label{
		font-weight: bold;
		margin-left: 24px;
    	display: inline-block;
		margin-bottom: 0;
	}
	.eln-form__group--disabled {
		pointer-events: none;
		filter: grayscale(1);
		cursor: not-allowed;
	}
	.eln-form__group--disabled input[type="radio"]+label:after,
	.eln-form__group--disabled input[type="radio"]+label:before{
		display: none !important;
	}
	.eln-form__group input[type="radio"]+label:after{
		content: "";
		position: absolute;
		width: 18px;
		height: 18px;
		border: 2px solid #b2b2b6;
		left: 0;
		border-radius: 50%;
		top: 0;
	}
	.eln-form__group input[type="radio"]+label:before{
		content: "";
		position: absolute;
		width: 8px;
		height: 8px;
		background-color: #b2b2b6;
		transform: rotate(-45deg);
		left: 5px;
		top: 5px;
		border-radius: 50%;
	}
	.eln-form__group input[type="radio"]:checked+label:before{
		background-color: #500ad2;
	}
	.eln-form__group input[type="radio"]:checked+label:after{
		border: 2px solid #500ad2;
	}
	.eln-form__group input[type="checkbox"]+label:after{
		content: "";
		position: absolute;
		width: 12px;
		height: 6px;
		border-left: 2px solid #fff;
		border-bottom: 2px solid #fff;
		transform: rotate(-45deg);
		left: 3px;
		top: 5px;
	}
	.eln-form__group input[type="checkbox"]+label:before{
		content: "";
		position: absolute;
		width: 18px;
		height: 18px;
		left: 0;
		border-radius: 3px;
		top: 0px;
		background-color: #b2b2b6;
	}
	.eln-form__group input[type="checkbox"]:checked+label:before{
		background-color: #500ad2;
	}
	.eln-form__group--inline .eln-form__group input[type="radio"]+label:before,
	.eln-form__group--inline .eln-form__group input[type="radio"]+label:after{
		display: none;
	}
	.eln-form__group--inline .eln-form__group input[type="radio"]:checked+label:after{
		display: inline-block;
		content: "";
		position: absolute;
		right: 16px;
		width: 12px;
		height: 6px;
		transform: rotate(-45deg);
		top: 20px;
		left: auto;
		border: none;
		border-radius: 0;
	}
	.eln-form__group--inline .eln-form__group input[type="radio"]:checked+label:before{
		display: inline-block;
		content: "";
		position: absolute;
		right: 12px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		left: auto;
    	top: auto;
	}
	.eln-form__group--inline .eln-form__group:first-child{
		background: rgb(232, 229, 248);
		color: rgb(155, 148, 193);
	}
	.eln-form__group--inline .eln-form__group:first-child input[type="radio"]:checked+label:before{
		background-color: rgb(155, 148, 193);;
	}
	.eln-form__group--inline .eln-form__group:first-child input[type="radio"]:checked+label:after{
		border-left: 2px solid rgb(232, 229, 248);
		border-bottom: 2px solid rgb(232, 229, 248);
	}
	.eln-form__group--inline .eln-form__group:nth-child(2){
		background: rgb(209, 242, 238);
		color: rgb(117, 163, 157);
	}
	.eln-form__group--inline .eln-form__group:nth-child(2) input[type="radio"]:checked+label:before{
		background-color: rgb(117, 163, 157);
	}
	.eln-form__group--inline .eln-form__group:nth-child(2) input[type="radio"]:checked+label:after{
		border-left: 2px solid rgb(209, 242, 238);
		border-bottom: 2px solid rgb(209, 242, 238);
	}
	.eln-form__group--inline .eln-form__group:last-child{
		background: rgb(254, 236, 222);
		color: rgb(202, 160, 127);
	}
	.eln-form__group--inline .eln-form__group:last-child input[type="radio"]:checked+label:before{
		background-color: rgb(202, 160, 127);
	}
	.eln-form__group--inline .eln-form__group:last-child input[type="radio"]:checked+label:after{
		border-left: 2px solid rgb(254, 236, 222);
		border-bottom: 2px solid rgb(254, 236, 222);
	}
	.eln-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.eln-list__item {
		display: grid;
		grid-template-columns: 1fr 100px;
		color: rgb(0, 0, 10);
		font-size: 13px;
		margin-bottom: 8px;
		font-family: "SFMono-Regular", monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
	}
	.eln-list__item div:last-child{
		text-align: right;
		color: rgb(41, 72, 7);
		font-weight: bold;
	}
</style>