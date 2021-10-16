<!-- =========================================================================================
	File Name: ChartjsComponentBubbleChart.vue
	Description: Chartjs component - Bubble Chart
	----------------------------------------------------------------------------------------
	Item Name: abjcloudsolutions.com dashboard management portal
		Author: Justed@Aidy
	Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->

<script>
import { Bubble } from 'vue-chartjs'

export default {
    extends: Bubble,
    props: {
        data: {
            type: Object,
            default: null,
        },
        options: {
            type: Object,
            default: null,
        }
    },
    mounted() {
        this.renderChart(this.data, this.options)
    }
}
</script>
