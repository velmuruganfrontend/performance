<!-- ===========================================================================
// cb-title		=	Page Level Titles (Title, Twitter, OG)
// cb-desc		=	Page Level Descriptions (Description, Twitter, OG)
// cb-image		=	Page Level Images (Twitter, OG)
// cb-style		=	Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script	=	Page Level Head Script. Using this tag to put head level scripts
// cb-body-script	=	Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex	=	Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header 		=	App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
// app-footer 		=	App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
  <div>
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta 
      :cb-title="'Break Even Analysis Calculator - Chart your Company Growth'" 
      :cb-desc="'Use our analysis calculator to identify your business\' break-even point or the level of business activity required to achieve your desired financial return.'" 
      :cb-url="'/resources/tools/break-even-analysis/'" 
      :cb-image="''"
      :cb-style="'/static/resources/tools/break-even-analysis/css/smoothness/jquery-ui-1.9.2.custom.css,/static/resources/tools/break-even-analysis/bootstrap/bootstrap.css'"
      :cb-head-script="''"
      :cb-body-script="'/static/resources/tools/break-even-analysis/js/jquery-ui-1.9.2.custom.min.js,/static/resources/tools/break-even-analysis/js/highcharts.js,/static/resources/tools/break-even-analysis/js/modules/exporting.js,/static/resources/tools/break-even-analysis/js/cal.js'"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
        <!--[if IE]>
            <link rel="stylesheet" type="text/css" href="css/custom-theme/jquery.ui.1.8.16.ie.css"/>
        <![endif]-->

        <div class="topbar">
            <div class="fill">
                <div class="container" >
                    <div class="brand">
                        <a href="/" style="display: inline-block; margin-top: 5px;">
                            <img src="/static/resources/brand/chargebee-logo-white.svg" width="100" alt="Chargebee"/>
                        </a>
                        <div class="brand-tag">Subscription Billing for Online Businesses.</div>
                    </div>
                    <ul class="nav"></ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="content">
                <div class="page-header">
                    <h1> 
                        Break Even Analysis Calculator <small>Chart your Company Growth</small>
                    </h1>
                </div>
                <div class="row">
                    <div class="span4" id="income-table">
                        <table>
                            <tr>
                                <th>ARPU ($)</th>
                                <th>New Customers Every Month</th>
                            </tr>
                            <tr>
                                <td>
                                    <div class="span2">
                                        <input id="arpu" type="text" class="arpu" value="10">
                                    </div>
									<div class="percentage">
									<input id="arpuCh" type="text" class="arpu"> <em>%<br>M-o-M</em>
									</div>
                                </td>
                                <td>
                                    <div class="span2">
                                        <input id="nc" type="text" class="nc">
                                    </div>
									<div class="percentage">
									<input id="ncCh" type="text" class="arpu"> <em>%<br>M-o-M</em>
									</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="span8" id="expense-table">
                        <table>
                            <tr>
                                <th>Fixed Monthly Expense ($)</th>
                                <!--<th>Percentage of Increase in Expense (%)</th>-->
                                <th>Cost of Customer Acquisition ($)</th>
                            </tr>
                            <tr>
                                <td style="width:198px;">
                                    <div class="span2" style="width:95px;">
                                        <input id="fme" type="text" class="fme">
                                    </div>
									<div class="percentage">
									<input id="fmeCh" type="text" class="fmeCh"> <em>%<br>M-o-M</em>
									</div>
                                </td>
                                
                                <!--<td>
                                    <div class="span2">
                                        <input id="fmeCh" type="text" class="fmeCh">
                                    </div>
                                </td>-->
                                
                                <td>
                                    <div class="span2">
                                        <input id="cac" type="text" class="cac">
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="span2" id="churn-table">
                        <table>
                            <tr>
                                <th>Monthly Churn (%)</th>
                            </tr>
                            <tr>
                                <td>
                                    <div class="span2">
                                        <input id="churn" type="text" class="churn">
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div id="container"
                         style="min-width: 400px; height: 400px; margin: 0 auto">
                    </div>
                </div>
                <div class="row">
                    <div>
                        <form action="" class="pull-right" style="margin-top: 15px;">
                            <span class='st_sharethis_large' displayText='ShareThis'></span> 
                            <span class='st_facebook_large' displayText='Facebook'></span>
                            <span class='st_twitter_large' displayText='Tweet'></span> 
                            <span class='st_linkedin_large' displayText='LinkedIn'></span>
                            <span class='st_googleplus_large' displayText='Google +'></span>
                            <span class='st_email_large' displayText='Email'></span>
                        </form>
                    </div>
                    <div class="alert-message row" style="margin-left: 20px;margin-top: 60px;">      
                        <strong>Recommended resources on pricing:</strong>
                        <ul>
                            <li>
                            <a href="https://www.linkedin.com/groups?home=&gid=122612&trk=anet_ug_hm">SAAS Group</a>
                                    - LinkedIn Group
                            </li>
                            <li>
                                <a href="http://neildavidson.com/download/dont-just-roll-the-dice/">
                                    Don't just roll the dice
                                </a>
                                - Excellent ebook on Software Pricing by Neil Davidson.
                            </li>
                            <li>
                                <a href="http://www.kalzumeus.com/2012/08/13/doubling-saas-revenue/" target="_blank">
                                    Doubling SAAS Revenue By Changing The Pricing Model
                                </a>
                            </li>
                            <li>
                                <a href="http://news.ycombinator.com/item?id=401988">
                                    How to price your software / SAAS - Discussion.
                                </a>
                            </li>
                            <li>
                                <a href="http://conversionxl.com/pricing-experiments-you-might-not-know-but-can-learn-from/">Pricing experiments
                                </a>
                            </li>
                        </ul>
                    </div>
                
                    <!-- <div class="enemailtxtbox">
                        <h2>Join our Mailing List</h2>
                        <p>Sign up to receive more curated recommendations.</p> -->
                        <!-- <div id="notify-form">
                            <form name="cb_notify" target="cb_notify_frame" method="post" action="https://www.formstack.com/api/submit" onSubmit="return validateNFrmNSubmit(true);"> 
                                <input type="hidden" name="api_key" value="9134E91DEBBBE2B7CF82F9B1CBCDC14F"/>
                                <input type="hidden" name="type" value="xml"/>
                                <input type="hidden" name="id" value="1095458"/>
                                
                                <input id="cb-notify-email-field" name="field_12713320" class="inp" placeholder="Your email address" type="text" tabindex="1" autofocus/>
                                <a id="cb-notify-btn" href="#" class="notbut" onClick="return validateNFrmNSubmit(false);" tabindex="2">Sign up</a>
                            </form>
                            
                            <div id="cb-feedback-message-holder">
                                <div id="cb-feedback-success-msg" style="display:none">
                                    Thanks for signing up.				
                                </div>
                                
                                <div id="cb-feedback-failure-msg" style="display:none">
                                    Please check your email address!				
                                </div>    
                                
                                <div id="cb-feedback-submit-msg" style="display:none">
                                    Submitting...				
                                </div>    
                                
                                <div id="cb-feedback-lsubmit-msg" style="display:none">
                                    Sorry. Server failed to respond.<br>Please contact us through <a href="mailto:support@chargebee.com">support@chargebee.com</a>
                                </div>    
                            </div>
                        </div> -->
                        <!-- dummy.html is for https. It is under static. If some changes in content of dummy, then add version as dummy_v2.html etc  -->
                        <!-- <iframe name="cb_notify_frame" src="dummy.html" style="display:none" onload="onNotifyFrameLoad()"></iframe> -->
                    <!-- </div> -->
					
					<!--div class="wufoo-form">
						<<iframe src="wufoo-form/index.html" allowtransparency="yes" frameborder="0" width="100%" height="140px"></iframe>>
						<h2>Join our Mailing List</h2>
						Sign up to receive more such curated recommendations.
						<a href="http://chargebee.wufoo.com/forms/r7x3q1/" target="_blank">Fill out my form!</a>
					</div-->
                </div>
				<!-- <div id="disqus_thread"></div>
                <script type="text/javascript">
                    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
                    var disqus_shortname = 'chbe'; // required: replace example with your forum shortname

                    /* * * DON'T EDIT BELOW THIS LINE * * */
                    (function() {
                        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                    })();
                </script>
                <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a> -->
				<p class="note">This is an experimental tool built to explore operational break-even numbers. None of this information is stored. We respect your privacy. Feel free to explore tool & share. Send in your feedback to: <a href="mailto:krish@chargebee.com">krish@chargebee.com</a>.</p>
            </div>



        </div>
		<div class="footer">© Chargebee Inc. All Rights Reserved.</div>
    </div>
    <!-- ===================================================================
    End: Body Section
    ==================================================================== -->
  </div>
</template>
<!-- ===========================================================================
End: Main Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts Section
============================================================================ -->
<script>
 import AppMeta from '~/components/AppMeta.vue';
  
  export default {
    components: {
      'app-meta': AppMeta
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
    mounted() {
        var notifyFrmSubmitted=false;
        var notifySubTimeoutId=null;
        var notifyTimeout = 10000;
        
        if(!window["$"])
        {
            window["$"]= function(idArg){ return document.getElementById(idArg); }
        }
        
        function validateNFrmNSubmit(retOnSuccess)
        {/* Notify email has to be manually vetted also due to "formstack" api */
                
            var emailReg=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            var emailEl = $("#cb-notify-email-field");
            if(!emailReg.test(emailEl.val()))
            {
                notifyToggleMsg("failure");
                return false;
            }
            notifyToggleMsg("submit");
            document.forms['cb_notify'].submit();
            notifySubTimeoutId = setTimeout(showSubmitMsg, notifyTimeout);
            notifyFrmSubmitted = true;
            return retOnSuccess;
        }
        
        function onNotifyFrameLoad()
        {
            if(!notifyFrmSubmitted){return;}
            notifyToggleMsg("success");
            $("#cb-notify-email-field").value="";
        }
        
        function notifyToggleMsg(selected)
        {
            var ids = ["success","failure","submit","lsubmit"];
            for(var i =0; i < ids.length;i++)
            {
                var idVal = ids[i];
                var msgCont = $("#cb-feedback-" +idVal + "-msg");
                (idVal == selected)? msgCont.show():msgCont.hide();
            }
            if(notifySubTimeoutId != null)
            {
                clearTimeout(notifySubTimeoutId);
                notifySubTimeoutId = null;
            }
        }
        
        function showSubmitMsg()
        {
            if(notifySubTimeoutId == null) {return;}
            notifyToggleMsg("lsubmit");
        }
    }
  }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    html,body {
        background-color: #eee;
    }

    body {
        padding-top: 40px;
    }

    .container>footer p {
        text-align: center; /* center align it with the container */
    }

    .container>.content {
        background-color: #fff;
        padding: 20px;
        margin: 0 -20px;
        /* negative indent the amount of the padding to maintain the grid system */
        -webkit-border-radius: 0 0 6px 6px;
        -moz-border-radius: 0 0 6px 6px;
        border-radius: 0 0 6px 6px;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
        -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
    }

    /* Page header tweaks */
    .page-header {
        background-color: #f5f5f5;
        padding: 25px 20px 0px;
        margin: -20px -20px 20px;
    }

    .topbar .btn {
        border: 0;
    }

    table tbody th {
        border: 1px solid #DDDDDD;
        vertical-align: top;
        width: 100px;
    }

    table tbody td {
        border: 1px solid #DDDDDD;
        vertical-align: top;
        width: 100px;
    }

    /*tr{
        height: 73px;
    }*/

    td th{
        text-align: center;
    }

    input {
        margin-bottom: 10px;
        height: 25px;
        font-weight: bold;
    }
    
    input.arpu, input.nc, input.cac {
        width: 40px;
    }

    input.fme{
        width: 75px;
    } 

    input.fmeCh, input.churn{
        width: 35px;
    } 
    .percentage{
        display: inline-block;
        margin: 0 0 0 15px;
        position:relative;
    }
    .percentage > input{
        margin:0;
        border:1px solid #AAA;
        padding:2px 5px;
        height:32px;
        width:33px;
        
        box-sizing:border-box;
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }
    .percentage > em{
        font-size:10px;
        font-weight:bolder;
        position:absolute;
        right:-37px;
        bottom:0;
        background:url(/static/resources/tools/break-even-analysis/img/up-sparline.gif) no-repeat 14px 4px;
        line-height:14px;
        font-style:normal;
    }
    .brand-tag{
        float: right; 
        font-size: 18px; 
        font-family: 'Basic',Arial; 
        color: #BFBFBF; 
        margin: 10px 0 0;	
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->

