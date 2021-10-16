<!-- =========================================================================================
	File Name: ChartjsComponentLineChart.vue
	Description: Chartjs component - Line Chart
	----------------------------------------------------------------------------------------
	Item Name: abjcloudsolutions.com dashboard management portal
		Author: Justed@Aidy
	Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->


<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
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
