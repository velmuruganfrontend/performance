<template>
    <div :id="'dynamic-'+dynamicFormId" class="common-hs-form"></div>
</template>
<script>
export default {
  props: ['hsFormId','hsFormPortalId'],
  data: function () {
    return {
      dynamicFormId: this.hsFormId ? this.hsFormId : '81f4ea38-ebbd-4a3e-879d-e1992cf4d8ac',
      dynamicPortalId: this.hsFormPortalId ? this.hsFormPortalId : '3732359'
    }
  },
  mounted () {
    let scriptTag = document.createElement('script')
    var hsScript = document.createTextNode('hbspt.forms.create({portalId: "'+this.dynamicPortalId+'",formId: "'+this.dynamicFormId+'"});')
    scriptTag.appendChild(hsScript);
    var targetElement = document.getElementById('dynamic-'+this.dynamicFormId);
    if(targetElement){
      targetElement.appendChild(scriptTag)
    }
  }
}
</script>
