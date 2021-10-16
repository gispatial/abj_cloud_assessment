<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: abjcloudsolutions.com dashboard management portal
    Developer: Tripcarte Development Team
    Author URL: https://www.abjcloudsolutions.com/
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>&copy; {{ new Date().getFullYear() }} <a href="https://www.abjcloudsolutions.com/" target="_blank" rel="nofollow">ABJ CLOUD SOLUTIONS</a>, All Rights Reserved.</span>
        <span class="md:flex hidden items-center">
          <feather-icon icon="BookIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
            &nbsp;<span>Assessment by JustEd. &copy; 2021.<br></span>
        </span>

        <!-- buyNow component -->
        <component :is="injections.components.BuyNow"></component>
    </footer>
</template>

<script>
import BuyNow from '../../components/BuyNow.vue'

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    },
    inject: {
      components:{
          default: {
            BuyNow
          }
      }
    }
}
</script>
