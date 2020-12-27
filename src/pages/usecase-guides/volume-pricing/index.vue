<template>
    <div>
        <app-meta 
            :cb-title="'Use Case Guides - Volume Pricing - Chargebee'" 
            :cb-desc="'Learn how Volume Pricing works, and how you can go about creating different pricing models for your customer personas in Chargebee.'" 
            :cb-url="'/usecase-guides/volume-pricing/'" 
            :cb-image="''"
            :cb-style="' /static/website/version/styles/new.css,/static/website/version/styles/usecase-guides.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'"
            :cb-has-noindex="true" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- ===============================================================
            Start Content Part  
            =================================================================-->
            <section class="container cb-useguide">
               <div class="row">
                 <div class="col-md-9">
                <article class="cb-useguide__content">
                    <!-- Page breadcrumb -->
                    <ol class="breadcrumb cb-breadcrumb">
                      <li>Use case guides</li>
                      <li class="active">Volume Pricing</li>
                    </ol>
                    <!-- End Page breadcrumb -->
                    <header>
                        <h1 class="ff-acuminpro cb-useguide__title">Volume Pricing</h1>
                        <p class="cb-useguide__time">Updated June 07, 2016</p>
                    </header>    
                    <!-- Section Intro -->
                    <section class="cb-useguide__section" id="intro">
                        <!-- <h2 class="cb-useguide__section-title ff-acuminpro">Introduction</h2> -->
                        <p>Volume Pricing is a pricing model used to define the price of the product with respect to the quantity purchased. Typically, the product price decreases with increasing quantity.</p>
                        <p>For instance, a license provider can set the price based on the number of licenses purchased. You might be paying $10 per license until you reach 5 but once you cross that figure, the cost might decrease to $8 per license, as shown below.</p>

                        <div class="cb-useguide__section-img">
                            <img src="/static/website/version/images/home/usecase-guide/guide-intro-volume.png" alt="Chargebee" width="475" class="img-responsive">
                        </div>
                        <p>Unlike <a href="/usecase-guides/tiered-pricing/" target="_blank">Tiered Pricing</a>, where the product price of each unit may differ based on the unit range, in the case of Volume Pricing, all units of the product will cost the same. </p>
                    </section> 
                    <!-- Section Subscription Created With 10 Units -->
                    <section class="cb-useguide__section" id="use-case-1">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro">Use Case 1: Subscription created with 5 units</h2>
                        <p>When a Subscription is created with a quantity of 5 units, all units will be charged $10 each, as they will fall into the ‘Volume 1’ category.</p>
                        <div class="cb-useguide__section-img">
                            <img src="/static/website/version/images/home/usecase-guide/sub-min-unit-volume.png" alt="Chargebee" width="477" class="img-responsive">
                        </div>
                    </section> 

                    <!-- Section Subscriptions Created With 50 Units -->
                    <section class="cb-useguide__section" id="use-case-2">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro">Use Case 2: Subscriptions created with 20 units</h2>
                        <p>When a Subscription is created with a quantity of 20 units, all units will be charged $6 each as they will fall into the ‘Volume 4’ category.</p>
                        <div class="cb-useguide__section-img">
                            <img src="/static/website/version/images/home/usecase-guide/sub-max-unit-volume.png" alt="Chargebee" width="477" class="img-responsive">
                        </div>
                        <div class="cb-useguide__section-img scroll-align">
                            <img src="/static/website/version/images/home/usecase-guide/invoice-volume.png" alt="Chargebee" width="640" class="img-responsive">
                        </div>
                    </section>  

                    <!-- Section Step 1 -->
                    <section class="cb-useguide__section" id="setup">
                        <div class="cb-useguide__section-title ff-acuminpro">Set up</div>
                        <p>Here’s a quick guide on how to set up <strong>Volume Pricing</strong> for a Plan using API and JSON payload.</p>
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro pad-t-sm" id="step1">Step 1</h2>
                        <p><a href="https://apidocs.chargebee.com/docs/api/plans#create_a_plan" target="_blank">Create Plans</a> (e.g. Plan name <strong>Cloud Server</strong>) for each volume range and set the Plan price as shown below. The Plan created in Chargebee need not be a quantity based Plan.</p>

                        <div class="cb-useguide__table-group step-width-big">
                            <div class="cb-useguide__table">
                                <span>cloud_server_01_05</span>
                                <span>Cloud Server (01 to 05)</span>
                                <span>$10.00</span>
                            </div>

                            <div class="cb-useguide__table step-width-big">
                                <span>cloud_server_06_10</span>
                                <span>Cloud Server (06 to 10)</span>
                                <span>$8.00</span>
                            </div>

                            <div class="cb-useguide__table step-width-big">
                                <span>cloud_server__11_15</span>
                                <span>Cloud Server (11 to 15)</span>
                                <span>$6.50</span>
                            </div>

                            <div class="cb-useguide__table  step-width-big">
                                <span>cloud_server_16+</span>
                                <span>Cloud Server (16+)</span>
                                <span>$6.00</span>
                            </div>
                        </div>
                    </section> 

                    <!-- Section Step 2 -->
                    <section class="cb-useguide__section" id="step2">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro">Step 2</h2>
                        <p><a href="https://www.chargebee.com/docs/metadata.html" target="_blank"> Add JSON Meta data</a> to the Volume Based Plan. Chargebee has the Meta data feature that can be used to store additional data at different levels (Plans, Subscriptions, Customers etc). Add the JSON Meta data to the Plans in order to establish quantity limits for each Plan.</p>

                        <div class="cb-useguide__pretify">
                            <pre>
                                <code class="prettyprint">
{"volume_pricing": [
    {
        "plan_id": "cloud_server_01_05",
        "min_qty": 1,
        "max_qty": 5
    },
    {
        "plan_id": "cloud_server_06_10",
        "min_qty": 6,
        "max_qty": 10
    },
    {
        "plan_id": "cloud_server_11_15",
        "min_qty": 11,
        "max_qty": 15
    },
    {
        "plan_id": "cloud_server_16",
        "min_qty": 16
    }
]}
                                </code>
                            </pre>
                        </div>

                        <div class="cb-useguide__tab">
                            <div>
                              <!-- Nav tabs -->
                              <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active"><a href="#php" aria-controls="php" role="tab" data-toggle="tab">Php</a></li>
                                <li role="presentation"><a href="#ruby" aria-controls="ruby" role="tab" data-toggle="tab">Ruby</a></li>
                                <li role="presentation"><a href="#python" aria-controls="python" role="tab" data-toggle="tab">Python</a></li>
                                <li role="presentation"><a href="#java" aria-controls="java" role="tab" data-toggle="tab">Java</a></li>
                                <li role="presentation"><a href="#net" aria-controls="java" role="tab" data-toggle="tab">.Net</a></li>
                                <li role="presentation"><a href="#node" aria-controls="node" role="tab" data-toggle="tab">Node</a></li>
                              </ul>

                              <!-- Tab panes -->
                              <div class="tab-content">
<!-- ============= Tab Content php  =============  -->  
<div role="tabpanel" class="tab-pane active" id="php">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">function volumePricingPlanMetaData($planId) {
  $volumePricing = array("volume_pricing" => array(
     array("plan_id" => $planId . "_01_05",
           "min_qty" => 1,
           "max_qty" => 5),
     array("plan_id" => $planId . "_06_10",
           "min_qty" => 6,
           "max_qty" => 10),
     array("plan_id" => $planId . "_11_15",
           "min_qty" => 11,
           "max_qty" => 15),
     array("plan_id" => $planId . "_16",
            "min_qty" => 16)
  ));

  $planResult = ChargeBee_Plan::update($planId,
        array("metaData" => json_encode($volumePricing)));
}
</code>
</pre>
</div>                                             
</div>



<!-- ============= Tab Content Ruby  =============  -->                                 
<div role="tabpanel" class="tab-pane" id="ruby">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">def volume_pricing_update_plan_meta(plan_id)
  volume_pricing = { :volume_pricing => [
    { :plan_id => "#{plan_id}_01_05",
      :min_qty => 1,
      :max_qty => 5
    },
    {  :plan_id => "#{plan_id}_06_10",
       :min_qty => 6,
       :max_qty => 10,
    },
    { :plan_id => "#{plan_id}_11_15",
      :min_qty => 11,
      :max_qty => 15
    },
    { :plan_id => "#{plan_id}_16",
      :min_qty => 16
    }
  ]}
  result = ChargeBee::Plan.update(plan_id, {
    :meta_data => volume_pricing.to_json
  })
end
</code>
</pre>
</div>                                            
</div>



<!-- ============= Tab Content python  =============  -->  
<div role="tabpanel" class="tab-pane" id="python">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">def volume_pricing_update_plan_meta_data(plan_id):
    volume_pricing = { "volume_pricing" : [
           { "plan_id" : plan_id + "_01_05",
             "min_qty" : 1,
             "max_qty" : 5
           },
           { "plan_id" : plan_id + "_06_10",
             "min_qty" : 6,
             "max_qty" : 10
           },
           { "plan_id" : plan_id + "_11_15",
             "min_qty" : 11,
             "max_qty" : 15
           },
           { "plan_id" : plan_id + "_16",
             "min_qty" : 16
           }
    ]}
    plan_result = chargebee.Plan.update(plan_id,
            {"meta_data": json.dumps(volume_pricing)})
</code>
</pre>
</div>                                             
</div>


<!-- ============= Tab Content node  =============  -->  
<div role="tabpanel" class="tab-pane" id="node">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">function volumePricingUpdatePlanMetaData(planId) {
 var volumePricing = { "volume_pricing" : [
       {  "plan_id" : planId + "_01_05",
          "min_qty" : 1,
          "max_qty" : 5
       },
       {
          "plan_id" : planId + "_06_10",
          "min_qty" : 6,
          "max_qty" : 10
       },
       {
          "plan_id" : planId + "_11_15",
          "min_qty" : 11,
          "max_qty" : 15
       },
       {  "plan_id" : planId + "_16",
          "min_qty" : 16
       }
   ]}
  chargebee.plan.update(planId, { meta_data : volumePricing})
        .request(function(planError, planResult){
      if(planError) {
         console.log(planError);
      } else {
         console.log(planResult);
      }
  });
}
</code>
</pre>
</div>                                             
</div>


<!-- ============= Tab Content java  =============  --> 
<div role="tabpanel" class="tab-pane" id="java">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">public void volumePricingUpdatePlanMetaData(String planId) 
        throws JSONException, IOException {
    JSONObject metaData = new JSONObject();
    JSONArray arr = new JSONArray();
    arr.put(volumePricingPlanObj(planId + "_01_05", 1, 5));
    arr.put(volumePricingPlanObj(planId + "_06_10", 6, 10));
    arr.put(volumePricingPlanObj(planId + "_11_15", 11, 15));
    arr.put(volumePricingPlanObj(planId + "_16", 16, 0));
    metaData.put("volume_pricing", arr);
    
    Result result = Plan.update(planId)
            .metaData(metaData).request();
}

public JSONObject volumePricingPlanObj(String planId, 
        int minQty, int maxQty) throws JSONException {
    return new JSONObject().put("plan_id", planId)
            .put("min_qty", minQty)
            .put("max_qty", maxQty);
}
</code>
</pre>
</div>                                             
</div>
<!-- ============= Tab Content Net  =============  --> 
<div role="tabpanel" class="tab-pane" id="net">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">public void volumePricingUpdatePlanMetaData(String planId){
    JObject metaData = new JObject();
    JArray arr = new JArray();
    arr.Add(volumePricingAddonObj(planId + "_01_05", 1, 5));
    arr.Add(volumePricingAddonObj(planId + "_06_10", 6, 10));
    arr.Add(volumePricingAddonObj(planId + "_11_15", 11, 15));
    arr.Add(volumePricingAddonObj(planId + "_16", 16, 0));
    metaData.Add(new JProperty("volume_pricing", arr));

    EntityResult planResult = Plan.Update(planId)
        .MetaData(metaData).Request();
}

public JObject volumePricingAddonObj(String planId, 
    int minQty, int maxQty){
    return new JObject (new JProperty("plan_id", planId),
        new JProperty("min_qty", minQty),
        new JProperty("max_qty", maxQty));
}
</code>
</pre>
</div>                                             
</div>
                              </div>

                            </div>
                        </div>
                    </section>    




                     <!-- Section Step 3 -->
                    <section class="cb-useguide__section" id="step3">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro">Step 3</h2>
                        <p><a href="https://apidocs.chargebee.com/docs/api/subscriptions#create_subscription_for_customer" target="_blank">Create Subscriptions</a> with a Volume Based Plan. Based on the volume purchased by the Customer, check the Plan’s Meta data and Create the Subscription with the appropriate Plan. The Plan’s Meta data can be queried before Subscription creation to receive the Plan details. </p>
                    </section>    




                    <!-- Section Step 5-->
                    <section class="cb-useguide__section" id="change-quantity">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro" > How to change quantity for Subscriptions with Volume Pricing</h2>
                        <p>When a Subscription’s quantity has to be changed, you can change the Plan using the  <a href="https://apidocs.chargebee.com/docs/api/subscriptions#update_a_subscription" target="_blank">Update Subscription</a> API. </p>
                        <p><strong>Let’s consider the following scenario:</strong><br><br>A Subscription is created with a quantity of 10 units. Since the quantity is 10, the Plan for this Subscription will be ‘Cloud Server (01 to 10)’. Now the Customer wants to change the quantity from 10 to 20 Units. </p>

                        <p>In this case, the Plan has to be changed from ‘Cloud Server (01 to 10)’ to ‘Cloud Server (16+)’, using the Update Subscription API call.</p>


                         <div class="cb-useguide__section-img scroll-align">
                            <img src="/static/website/version/images/home/usecase-guide/change-subscription-volume.png" alt="Chargebee" width="743" class="img-responsive">
                        </div>


                        <div class="cb-useguide__tab cb-useguide__tab-alt">
                            <div>
                              <!-- Nav tabs -->
                              <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active"><a href="#php-tier" aria-controls="php" role="tab" data-toggle="tab">Php</a></li>
                                <li role="presentation"><a href="#ruby-tier" aria-controls="ruby" role="tab" data-toggle="tab">Ruby</a></li>
                                <li role="presentation"><a href="#python-tier" aria-controls="python" role="tab" data-toggle="tab">Python</a></li>
                                <li role="presentation"><a href="#java-tier" aria-controls="java" role="tab" data-toggle="tab">Java</a></li>
                                <li role="presentation"><a href="#net-tier" aria-controls="net" role="tab" data-toggle="tab">.Net</a></li>
                                <li role="presentation"><a href="#node-tier" aria-controls="node" role="tab" data-toggle="tab">Node</a></li>
                              </ul>

                              <!-- Tab panes -->
                              <div class="tab-content">


<!-- ============= Tab Content php  =============  -->  
<div role="tabpanel" class="tab-pane active" id="php-tier">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">function volumePricingUpdateSubscription($subscriptionId,
        $hiddenPlanId, $subscribeQty) {
  // Retrieve meta data from hidden plan
  $planResult = ChargeBee_Plan::retrieve($hiddenPlanId);
  $metaData = $planResult->plan()->metaData;
  $volumePricing = $metaData["volume_pricing"];
  $updateSubParams = array();
  for($i=0; $i &lt; count($volumePricing); $i++) {
    $planObj = $volumePricing[$i];
    $planId = $planObj["plan_id"];
    $minQty = $planObj["min_qty"];
    $maxQty = isset($planObj["max_qty"]) ?
                      $planObj["max_qty"] : 0;
    if( $minQty &lt;= $subscribeQty &&
            ($subscribeQty &lt;= $maxQty || $maxQty == 0)) {
      $updateSubParams["planId"] = $planId;
      $updateSubParams["planQuantity"] = $subscribeQty;
      break;
    }
  }
  $result = ChargeBee_Subscription::update($subscriptionId,
                               $updateSubParams);

}
</code>
</pre>
</div>                                             
</div>



<!-- ============= Tab Content Ruby  =============  -->   
<div role="tabpanel" class="tab-pane" id="ruby-tier"> 
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">def volume_pricing_update_subscription(hidden_plan_id,
       subscription_id, subscribe_qty)
  plan_result = ChargeBee::Plan.retrieve(hidden_plan_id)
  meta_data = plan_result.plan.meta_data
  volume_pricing = meta_data[:volume_pricing]
  update_sub_params = Hash.new
  volume_pricing.each do |plan_obj|
     plan_id = plan_obj[:plan_id]
     min_qty = plan_obj[:min_qty]
     max_qty = plan_obj[:max_qty]
     if min_qty &lt;= subscribe_qty &&
           (max_qty == nil || subscribe_qty &lt;= max_qty)
        update_sub_params[:plan_id] = plan_id
        update_sub_params[:plan_quantity] = subscribe_qty
        break
     end
  end
  result = ChargeBee::Subscription.update(subscription_id,
                            update_sub_params)
end
</code>
</pre>
</div>                                            
</div>



<!-- ============= Tab Content python  =============  -->  
<div role="tabpanel" class="tab-pane" id="python-tier">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">def volume_pricing_update_subscription(subscription_id,
         hidden_plan_id, subscribe_qty):
   plan_result = chargebee.Plan.retrieve(hidden_plan_id)
   meta_data = plan_result.plan.meta_data
   volume_pricing = meta_data["volume_pricing"]
   update_sub_params = {}
   for plan_obj in volume_pricing:
       plan_id = plan_obj.get("plan_id")
       min_qty = plan_obj.get("min_qty")
       max_qty = plan_obj.get("max_qty", None)
       if (min_qty &lt;= subscribe_qty and
             (max_qty == None or subscribe_qty &lt;= max_qty)):
          update_sub_params["plan_id"] = plan_id
          update_sub_params["plan_quantity"] = subscribe_qty
          break
   result = chargebee.Subscription.update(subscription_id,
                                  update_sub_params)
</code>
</pre>
</div>                                             
</div>


<!-- ============= Tab Content java  =============  --> 
<div role="tabpanel" class="tab-pane" id="java-tier">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">void volumePricingUpdateSubscription(String subscriptionId,
    String hiddenPlanId, int subscribeQty) throws Exception {

    Result planResult = Plan.retrieve(hiddenPlanId).request();
    JSONArray volumePricing = planResult.plan().metaData()
            .getJSONArray("volume_pricing");
    Subscription.UpdateRequest updateRequest = Subscription
            .update(subscriptionId);
    for(int i=0; i &lt; volumePricing.length(); i++){
        JSONObject obj = volumePricing.getJSONObject(i);
        String planId = obj.getString("plan_id");
        int minQty = obj.getInt("min_qty");
        int maxQty = obj.getInt("max_qty");
        
        if(minQty &lt;= subscribeQty && 
                (subscribeQty &lt;= maxQty || maxQty == 0) ) {
            updateRequest.planId(planId)
                .planQuantity(subscribeQty);
            break;
        } 
    }
    
    Result result = updateRequest.request();         
}
</code>
</pre>
</div>                                             
</div>
<!-- ============= Tab Content Net  =============  --> 
<div role="tabpanel" class="tab-pane" id="net-tier">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">void volumePricingUpdateSubscription(String subscriptionId, 
            String hiddenPlanId, int subscribeQty) {
    EntityResult planResult = Plan.Retrieve(hiddenPlanId)
                                .Request();
    JArray volumePricing = planResult.Plan
        .MetaData ["volume_pricing"].Value&lt;JArray&gt;();
    Subscription.UpdateRequest updateRequest = Subscription
        .Update(subscriptionId);
    for(int i=0;i &lt; volumePricing.Count; i++) {
        JObject obj = (JObject)volumePricing [i];
        String planId = (string)obj ["plan_id"];
        int minQty =  (int)obj ["min_qty"];
        int maxQty = (int)obj ["max_qty"];

        if(minQty &lt;= subscribeQty && 
            (subscribeQty &lt;= maxQty || maxQty == 0) ) {
            updateRequest.PlanId(planId)
                .PlanQuantity(subscribeQty);
            break;
        } 
    }

    EntityResult result = updateRequest.Request();
}
</code>
</pre>
</div>                                             
</div>



<!-- ============= Tab Content node  =============  -->  
<div role="tabpanel" class="tab-pane" id="node-tier">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">function volumePricingUpdateSubscription(subscriptionId,
        hiddenPlanId, subscribeQty) {
  chargebee.plan.retrieve(hiddenPlanId)
        .request(function(planError, planResult){
    if(planError) {
       console.log(planError);
    } else {
       var metaData = planResult.plan.meta_data;
       var volumePricing = metaData.volume_pricing;
       var updateSubParams = {};
       for(var i=0; i&lt; volumePricing.length; i++){
          var planObj = volumePricing[i];
          var planId = planObj.plan_id;
          var minQty = planObj.min_qty;
          var maxQty = planObj.max_qty;
          if(minQty &lt;= subscribeQty &&
                (typeof(maxQty) === 'undefined' || 
                   subscribeQty &lt;= maxQty))  {
            updateSubParams["plan_id"] = planId;
            updateSubParams["plan_quantity"] = subscribeQty;
            break;
          }
       }
       chargebee.subscription
            .update(subscriptionId, updateSubParams)
            .request(function(error, result) {
          if(error) {
            console.log(error);
          }else {
            console.log(result);
          }
       })

    }
  })
}
</code>
</pre>
</div>                                             
</div>
                              </div>

                            </div>
                        </div>
                    </section>

                </article>
                 </div>
                 <div class="col-md-3 hidden-xs hidden-sm">
                    <!-- Affix sidebar -->
                    <div id="affix-nav">
                       <ul class="nav cb-affix">
                          <li class="cb-affix__title">IN THIS Page</li>
                          <li class="active"><a href="#intro">Introduction</a></li>
                          <li><a href="#use-case-1">Subscription created with 5 units</a></li>
                          <li>
                             <a href="#use-case-2">Subscriptions created with 20 units</a>
                          </li>
                          <li><a href="#setup">Set up</a></li>
                          <li><a href="#change-quantity">How to change quantity for Subscriptions with Volume Pricing</a></li>
                       </ul>
                       <div class="cb-signup-box">
                          <a cn-mark-signup="true" href="/trial-signup/">Sign up</a> today and use our different pricing models.
                       </div>
                       <!--  <li><a href="#step1">Step 1</a></li>
                          <li><a href="#step2">Step 2</a></li>
                          <li><a href="#step3">Step 3</a></li>
                          <li><a href="#step4">Step 4</a></li>
                          <li><a href="#step5">Change Quantity for Subscriptions with Tiered Pricing</a></li>
                          </ul>
                          </div>-->
                       <!-- Affix sidebar End -->
                    </div>
                 </div>
               </div>
            </section>
            <!-- ================================================ 
            Signup Part End 
            ================================================= -->
        </div>
        <div id="footer">
            <app-footer />
        </div>
    </div>
</template>
<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter
        },
        mounted() {
            $('body').scrollspy({ target: '#affix-nav' })
            $('#affix-nav').affix({
                offset: {
                  top: 20,
                  bottom: function () {
                        return (this.bottom = $('#footer').outerHeight(true) + 50)
                    }
                }
            })
        },
        methods: {}
    }
</script>
<style type="text/css">
    #ch-js-header-cloned{
        display: none;
    }
</style>