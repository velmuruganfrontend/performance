<template>
    <div>
        <app-meta 
            :cb-title="'Use Case Guides - Tiered Pricing - Chargebee'" 
            :cb-desc="'Learn how Tiered Pricing works, and how you can go about creating different tiers for your customer personas in Chargebee.'" 
            :cb-url="'/usecase-guides/tiered-pricing/'" 
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
                      <li class="active">Tiered Pricing</li>
                    </ol>
                    <!-- End Page breadcrumb -->
                    <header>
                        <h1 class="ff-acuminpro cb-useguide__title">Tiered Pricing</h1>
                        <p class="cb-useguide__time">Updated June 07, 2016</p>
                    </header>    
                    <!-- Section Intro -->
                    <section class="cb-useguide__section" id="intro">
                        <!-- <h2 class="cb-useguide__section-title ff-acuminpro">Introduction</h2> -->
                        <p>Tiered Pricing is a means of providing products or services at different price points. In this type of pricing model, the product rates are bundled into separate pricing tiers. Once a tier is filled up, the product will move to the next tier and a different price will be charged.</p>

                        <div class="cb-useguide__section-img">
                            <img src="/static/website/version/images/home/usecase-guide/guide-intro.png" alt="Chargebee" width="475" class="img-responsive">
                        </div>
                        <p>If you're looking to set up Volume Pricing, please refer to our guide <a href="/usecase-guides/volume-pricing/" target="_blank">here.</a></p>
                    </section> 



                    <!-- Section Subscription Created With 10 Units -->
                    <section class="cb-useguide__section" id="use-case-1">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro">Use Case 1: Subscription created with 10 units</h2>
                        <p>When a Subscription is created with a quantity of 10 units, all units will be charged $15, as the number of units would fall in the Tier 1 range.</p>
                        <div class="cb-useguide__section-img">
                            <img src="/static/website/version/images/home/usecase-guide/sub-min-unit.png" alt="Chargebee" width="477" class="img-responsive">
                        </div>
                    </section> 



                    <!-- Section Subscriptions Created With 50 Units -->
                    <section class="cb-useguide__section" id="use-case-2">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro">Use Case 2: Subscriptions created with 50 units</h2>
                        <p>When a Subscription is created with a quantity of 50 units, the price would be calculated across all four tiers.</p>
                        <div class="cb-useguide__section-img">
                            <img src="/static/website/version/images/home/usecase-guide/sub-max-unit.png" alt="Chargebee" width="477" class="img-responsive">
                        </div>
                        <div class="cb-useguide__section-img scroll-align">
                            <img src="/static/website/version/images/home/usecase-guide/invoice.png" alt="Chargebee" width="640" class="img-responsive">
                        </div>
                    </section>  



                    <!-- Section Step 1 -->
                    <section class="cb-useguide__section" id="setup">
                        <div class="cb-useguide__section-title ff-acuminpro">Set up</div>
                        <p>Here’s a quick guide on how to set up <strong>Tiered Pricing</strong> using API and JSON payload.</p>
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro pad-t-sm" id="step1">Step 1</h2>
                        <p><a href="https://apidocs.chargebee.com/docs/api/plans#create_a_plan" target="_blank">Create a $0 Base Plan</a> (e.g. Plan name <strong>Cloud Server</strong>) with <strong>Flat Fee</strong> pricing in your Chargebee site. The only purpose of this Plan would be to define the billing frequency of the product (monthly, quarterly, etc.).</p>

                        <div class="cb-useguide__table-group">
                            <div class="cb-useguide__table">
                                <span>cloud_server_base</span>
                                <span>Cloud Server (Base)</span>
                                <span>$0.00</span>
                            </div>
                        </div>
                    </section> 



                    <!-- Section Step 2 -->
                    <section class="cb-useguide__section" id="step2">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro">Step 2</h2>
                        <p><a href="https://apidocs.chargebee.com/docs/api/addons#create_an_addon" target="_blank">Create a Recurring Addon</a> (quantity based) for every tier as shown below. Ensure that the Addon frequency matches the frequency of the Plan.</p>
                        <div class="cb-useguide__table-group">
                            <div class="cb-useguide__table">
                                <span>cloud_server_01_20</span>
                                <span>Cloud Server (01 to 20)</span>
                                <span>$15.00</span>
                            </div>

                            <div class="cb-useguide__table">
                                <span>cloud_server_21_25</span>
                                <span>Cloud Server (21 to 25)</span>
                                <span>$10.00</span>
                            </div>

                            <div class="cb-useguide__table">
                                <span>cloud_server_26_30</span>
                                <span>Cloud Server (26 to 30)</span>
                                <span>$8.00</span>
                            </div>

                            <div class="cb-useguide__table step-width-big">
                                <span>cloud_server_31</span>
                                <span>Cloud Server (31+)</span>
                                <span>$5.00</span>
                            </div>

                        </div>
                    </section>    




                     <!-- Section Step 3 -->
                    <section class="cb-useguide__section" id="step3">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro">Step 3</h2>
                        <p><a href="https://www.chargebee.com/docs/metadata.html" target="_blank">Add the JSON Meta data</a> to the $0 Base Plan. Chargebee has the Meta data feature that can be used to store additional data at different levels (Plans, Subscriptions, Customers etc). Add JSON Meta data to the $0 Base Plan, to establish a relationship between "the unit range and the Addons.</p>
                        
                        <div class="cb-useguide__pretify">
                            <pre>
                                <code class="prettyprint">
{"tiered_pricing": [
   {
       "addon_id": "cloud_server_01_20",
       "start_range": 1,
       "end_range": 20 
   },
   {
       "addon_id": "cloud_server_21_25",
       "start_range": 21,
       "end_range": 25
   },
   {
       "addon_id": "cloud_server_26_30",
       "start_range": 26,
       "end_range": 30
   },
   {
       "addon_id": "cloud_server_31",
       "start_range": 31
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
<code class="prettyprint">function tieredPricingUpdatePlanMetaData($planId) {
  $tieredPricing = array( "tiered_pricing" => array(
     array("addon_id" => $planId . "_01_20", 
           "start_range" => 1, 
           "end_range" => 20),
     array("addon_id" => $planId . "_21_25", 
           "start_range" => 21, 
           "end_range" => 25),
     array("addon_id" => $planId . "_26_30", 
           "start_range" => 26, "end_range" => 30),
     array("addon_id" => $planId . "_31", 
            "start_range" => 31)
     )
  );

  $planResult = ChargeBee_Plan::update($planId, 
           array("metaData" => json_encode($tieredPricing)));
}
</code>
</pre>
</div>                                             
</div>



<!-- ============= Tab Content Ruby  =============  -->  
<div role="tabpanel" class="tab-pane" id="ruby">  
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">def tiered_pricing_update_plan_meta_data(plan_id)
 tiered_pricing = {:tiered_pricing => [
    {  :addon_id => "#{plan_id}_01_20",
       :start_range => 1,
       :end_range => 20
    },
    {  :addon_id => "#{plan_id}_21_25",
       :start_range => 21,
       :end_range => 25
    },
    {  :addon_id => "#{plan_id}_26_30",
       :start_range => 26,
       :end_range => 30
    },
    {  :addon_id => "#{plan_id}_31",
       :start_range => 31
    }
  ]}
  result = ChargeBee::Plan.update(plan_id, {
    :meta_data => tiered_pricing.to_json
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
<code class="prettyprint">def tiered_pricing_update_plan_meta_data(plan_id):
    tiered_pricing = {
       "tiered_pricing" : [
            { "addon_id" :  "cloud_server_01_20",
              "start_range" : 1,
              "end_range" : 20
            },
            { "addon_id" :  "cloud_server_21_25",
              "start_range" : 21,
              "end_range" : 25
            },
            { "addon_id" : "cloud_server_26_30",
              "start_range" : 26,
              "end_range" : 30
            },
            { "addon_id" : "cloud_server_31",
              "start_range" : 31
            }
    ]}
    plan_result = chargebee.Plan.update(plan_id, 
         {"meta_data": json.dumps(tiered_pricing)})
</code>
</pre>
</div>                                             
</div>


<!-- ============= Tab Content node  =============  -->  
<div role="tabpanel" class="tab-pane" id="node">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">
function tieredPricingUpdatePlanMetaData(planId) {
var tiered_pricing = { "tiered_pricing": [
    { "addon_id" : planId + "_01_20",
      "start_range": 1,
      "end_range": 20
    },
    { "addon_id" : planId + "_21_25",
      "start_range": 21,
      "end_range": 25
    },
    { "addon_id" : planId + "_26_30",
      "start_range": 26,
      "end_range": 30
    },
    { "addon_id" : planId + "_31",
      "start_range": 31,
    }]
};

chargebee.plan.update(planId, {  meta_data: tiered_pricing })
    .request(function(error, result) {
      if(error){
        console.log(error);
      }else{
        console.log(result);
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
<code class="prettyprint">public void tieredPricingUpdatePlanMetaData(String planId) 
       throws JSONException, IOException {
    JSONObject metaData = new JSONObject();
    JSONArray arr = new JSONArray();
    arr.put(addonObj(planId + "_01_20", 1, 20));
    arr.put(addonObj(planId + "_21_25", 21, 25));
    arr.put(addonObj(planId + "_26_30", 26, 30));
    arr.put(addonObj(planId + "_31", 31, 0));
    metaData.put("tiered_pricing", arr);
    
    Result planResult = Plan.update(planId)
            .metaData(metaData).request();
}
    

public JSONObject addonObj(String addonId, int startRange, 
        int endRange) throws JSONException {
    return new JSONObject().put("addon_id", addonId)
            .put("start_range", startRange)
            .put("end_range", endRange);
}
</code>
</pre>
</div>                                             
</div>
<!-- ============= Tab Content Net  =============  --> 
<div role="tabpanel" class="tab-pane" id="net">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">public void tieredPricingUpdatePlanMetaData(String planId){
    JObject metaData = new JObject();
    JArray arr = new JArray();
    arr.Add(addonObj(planId + "_01_20", 1, 20));
    arr.Add(addonObj(planId + "_21_25", 21, 25));
    arr.Add(addonObj(planId + "_26_30", 26, 30));
    arr.Add(addonObj(planId + "_31", 31, 0));
    metaData.Add(new JProperty("tiered_pricing", arr));

    EntityResult planResult = Plan.Update(planId)
        .MetaData(metaData).Request();
}


public JObject addonObj(String addonId, int startRange, 
            int endRange) {
    return new JObject (new JProperty("addon_id",addonId),
        new JProperty("start_range",startRange),
        new JProperty("end_range",endRange));
}
</code>
</pre>
</div>                                             
</div>
                              </div>

                            </div>
                        </div>
                    </section>    





                    <!-- Section Step 4-->
                    <section class="cb-useguide__section" id="step4">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro">Step 4</h2>
                        <p><strong>Create a Subscription with the Tiered Plan and Addons</strong><br><br>Based on the Plan’s metadata, pick the appropriate Addon(s) and create the Subscription with the required range. The Plan’s metadata can be queried before Subscription creation to receive the Addon and Tier details.</p>
                    </section>




                    <!-- Section Step 5-->
                    <section class="cb-useguide__section" id="change-quantity">
                        <h2 class="cb-useguide__section-subtitle ff-acuminpro" > How to change quantity for Subscriptions with Tiered Pricing</h2>
                        <p>When a Subscription’s quantity has to be changed, you can create the new set of Addons using the <a href="https://apidocs.chargebee.com/docs/api/subscriptions#update_a_subscription" target="_blank">Update Subscription</a> API. </p>
                        <p><strong>Let’s consider the following scenario:</strong><br><br>A Subscription is created with a quantity of 25 units. The price for this, hence, will be calculated using 2 tiers.</p>
                        
                        <div class="cb-useguide__table-group">
                            <div class="cb-useguide__table step-width-small">
                                <span>1-20 Units</span>
                                <span>Tier 1</span>
                            </div>
                            <div class="cb-useguide__table">
                                <span>21-25 Units</span>
                                <span>Tier 2</span>
                            </div>
                        </div>

                        <p>The Customer now wants the Subscription’s quantity to be changed from <br>25 to 5 units.</p>
                        <p>In this case, call the <a href="https://apidocs.chargebee.com/docs/api/subscriptions#update_a_subscription" target="_blank">Update a Subscription</a> API with <strong>replace_addon_list</strong> parameter set to <strong>true</strong> and pass the Addon quantities as per the change in Subscription.</p>


                         <div class="cb-useguide__section-img scroll-align">
                            <img src="/static/website/version/images/home/usecase-guide/change-subscription.png" alt="Chargebee" width="743" class="img-responsive">
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
<code class="prettyprint">function tieredPricingUpdateSubscription($planId,
       $subscribeQty, $subscriptionId) {

  $planResult = ChargeBee_Plan::retrieve($planId);
  $metaData = $planResult->plan()->metaData;
  $tieredPricing = $metaData["tiered_pricing"];
  $addons = array();
  for($i=0; $i &lt; count($tieredPricing); $i++) {
    $addonObj = $tieredPricing[$i];
    $addonId = $addonObj["addon_id"];
    $startRange = $addonObj["start_range"];
    $endRange = isset($addonObj["end_range"]) ?
                       $addonObj["end_range"] : 0;

    if($subscribeQty &lt; $startRange) {
     break;
    }

    $addonQty = 0;
    if($subscribeQty &lt;= $endRange || $endRange == 0 ) {
         $addonQty = $subscribeQty - $startRange;
    } else {
         $addonQty =  $endRange - $startRange;
    }
    $addonQty = $addonQty + 1;
    $addons[] = array("id" => $addonId,
                      "quantity"=> $addonQty);
  }

  $result = ChargeBee_Subscription::update($subscriptionId,
          array("replaceAddonList"=> "true",
                "addons" => $addons));
}</code>
</pre>
</div>                                             
</div>                              



<!-- ============= Tab Content Ruby  =============  -->
<div role="tabpanel" class="tab-pane" id="ruby-tier">    
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">def tiered_pricing_update_subscription(plan_id, 
          subscription_id, subscribe_qty)
  plan_result = ChargeBee::Plan.retrieve(plan_id)
  meta_data = plan_result.plan.meta_data
  tiered_pricing = meta_data[:tiered_pricing]
  addons = Array.new
  tiered_pricing.each do |addon_obj|
    addon_id = addon_obj[:addon_id]
    start_range = addon_obj[:start_range]
    end_range = addon_obj[:end_range]
    if subscribe_qty &lt; start_range
      break
    end
    addon_qty = 0
    if end_range == nil || subscribe_qty &lt;= end_range
       addon_qty = subscribe_qty - start_range
    elsif
       addon_qty = end_range - start_range
    end
    addon_qty = addon_qty + 1
    addons.push({:id => addon_id, :quantity => addon_qty })
 end
 result = ChargeBee::Subscription.update(subscription_id,
              {:replace_addon_list => "true", 
               :addons => addons})                        

end</code>
</pre>
</div>                                            
</div>



<!-- ============= Tab Content python  =============  -->  
<div role="tabpanel" class="tab-pane" id="python-tier">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">def tiered_pricing_update_subscription(plan_id, 
      subscription_id, subscribe_qty):
   plan_result = chargebee.Plan.retrieve(plan_id)
   meta_data = plan_result.plan.meta_data
   tiered_pricing = meta_data["tiered_pricing"]
   addons = []
   for addon_obj in tiered_pricing:
       addon_id = addon_obj.get("addon_id")
       start_range = addon_obj.get("start_range")
       end_range = addon_obj.get("end_range", None)
       addon_qty = 0
       if subscribe_qty &lt; start_range:
          break
       if end_range == None or subscribe_qty &lt;= end_range:
           addon_qty = subscribe_qty - start_range
       else:
           addon_qty = end_range - start_range

       addon_qty = addon_qty + 1
       addons.append({"id": addon_id, "quantity" : addon_qty})
   result = chargebee.Subscription.update(subscription_id,
             {"replace_addon_list" : "true", 
              "addons" : addons})    
</code>
</pre>
</div>                                             
</div>


<!-- ============= Tab Content node  =============  -->  
<div role="tabpanel" class="tab-pane" id="node-tier">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">function tieredPricingUpdateSubscription(planId,
      subscribeQty, subscriptionId ) {

 chargebee.plan.retrieve(planId)
     .request(function(planError, planResult) {
   if(planError) {
      console.log(planError);
   } else {
      var metaData = planResult.plan.meta_data;
      var tieredPricing = metaData.tiered_pricing;
      var addons = [];
      for(var i=0; i &lt; tieredPricing.length; i++) {
        var addonObj = tieredPricing[i];
        var addonId = addonObj.addon_id
        var startRange = addonObj.start_range
        var endRange = addonObj.end_range
        var addonQty = 0;
        if(subscribeQty &lt; startRange) {
           break;
        }
        if( typeof(endRange) === 'undefined' || 
                         subscribeQty &lt;= endRange) {
           addonQty = subscribeQty - startRange;
        } else {
           addonQty = endRange - startRange;
        }
        addonQty = addonQty + 1;
        addons.push({ "id" : addonId, "quantity" : addonQty})
      }
      chargebee.subscription.update(subscriptionId,
        { "replace_addon_list" : "true",
          "addons" : addons })
         .request(function(error, result){
              if(error) {
                console.log(error);
              } else {
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


<!-- ============= Tab Content java  =============  --> 
<div role="tabpanel" class="tab-pane" id="java-tier">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">public void tieredPricingUpdateSubscription(String planId,
        int subscribeQty, String subscriptionId) 
        throws Exception {
    Result planResult = Plan.retrieve(planId).request();
    JSONArray tieredPricing = planResult.plan().metaData()
            .getJSONArray("tiered_pricing");
    Subscription.UpdateRequest updateRequest = Subscription
            .update(subscriptionId);
    int addonIndex = 0; 
    for(int i=0;i &lt; tieredPricing.length(); i++) {
        JSONObject obj = (JSONObject) tieredPricing.get(i);
        String addonId = obj.getString("addon_id");
        int startRange =  obj.getInt("start_range");
        int endRange = obj.getInt("end_range");
        if(subscribeQty &lt; startRange) { 
            break;
        }
        int addonQty = 0;
        if(subscribeQty &lt;= endRange || endRange == 0) {
            addonQty = subscribeQty - startRange;
        } else {
            addonQty = endRange - startRange; 
        }
        addonQty = addonQty + 1; 
        updateRequest.addonId(addonIndex, addonId)
                .addonQuantity(addonIndex, addonQty);
        addonIndex++;
    }
    Result result = updateRequest.replaceAddonList(true)
            .request();
}
</code>
</pre>
</div>                                             
</div>
<!-- ============= Tab Content Net  =============  --> 
<div role="tabpanel" class="tab-pane" id="net-tier">
<div class="cb-useguide__pretify">
<pre>
<code class="prettyprint">public void tieredPricingUpdateSubscription(String planId, 
    int subscribeQty,String subscriptionId) {
    EntityResult planResult = Plan.Retrieve(planId)
                                .Request();
    JArray tieredPricing = planResult.Plan
        .MetaData ["tiered_pricing"].Value&lt;JArray&gt;();
    Subscription.UpdateRequest updateRequest = Subscription
        .Update(subscriptionId);
    int addonIndex = 0; 
    for(int i=0;i &lt; tieredPricing.Count; i++) {
        JObject obj = (JObject)tieredPricing [i];
        String addonId = (string)obj ["addon_id"];
        int startRange =  (int)obj ["start_range"];
        int endRange = (int)obj ["end_range"];
        if(subscribeQty &lt; startRange) { 
            break;
        }
        int addonQty = 0;
        if(subscribeQty &lt;= endRange || endRange == 0) {
            addonQty = subscribeQty - startRange;
        } else {
            addonQty = endRange - startRange; 
        }
        addonQty = addonQty + 1; 
        updateRequest.AddonId(addonIndex, addonId)
            .AddonQuantity(addonIndex, addonQty);
        addonIndex++;
    }
    EntityResult result = updateRequest
        .ReplaceAddonList(true).Request();
}
</code>
</pre>
</div>                                             
</div>
                              </div>

                            </div>
                        </div>
                    </section>




                    <!-- Section Step 5-->
                    <section class="cb-useguide__section pad-t-zero">
                        <div class="cb-useguide__section-note">
                            <strong>Note:</strong> Ensure that other Addons belonging to the Subscription are not removed in this process.
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
                                <li><a href="#use-case-1">Subscription created with 10 units</a></li>
                                <li>
                                    <a href="#use-case-2">Subscriptions created with 50 units</a>
                                </li>
                                <li><a href="#setup">Set up</a></li>
                                <li><a href="#change-quantity">How to change quantity for Subscriptions with Tiered Pricing</a></li>
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
        </div>
        <div id="footer">
            <app-footer></app-footer>
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