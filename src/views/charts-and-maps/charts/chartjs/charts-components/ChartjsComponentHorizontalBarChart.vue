<!-- =========================================================================================
	File Name: ChartjsComponentHorizontalBarChart.vue
	Description: Chartjs component - Horizontal Bar Chart
	----------------------------------------------------------------------------------------
	Item Name: abjcloudsolutions.com dashboard management portal
		Author: Justed@Aidy
	Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->


<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
    extends: HorizontalBar,
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
