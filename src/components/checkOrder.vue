<template>
    <div>
        <this-dialog :is-show="isShowCheckDialog" @click="checkStatus">
            请检查你的支付状态！
            <div class="button" @click="checkStatus">
                支付成功
            </div>
            <div class="button" @click="checkStatus">
                支付失败
            </div>
        </this-dialog>
        <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
            购买成功！
        </this-dialog>
        <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
            购买失败！
        </this-dialog>
    </div>
</template>

<script>
import thisDialog from './base/dialog'
export default {
    components: {
        thisDialog
    },
    props: {
        isShowCheckDialog: {
            type: Boolean,
            default: false
        },
        orderId: {
            type: [String, Number]
        }
    },
    data() {
        return {
            isShowSuccessDialog: false,
            isShowFailDialog: false
        }
    },
    methods: {
        chooseSelection(index) {
            this.nowIndex = index
            this.$emit('on-change', this.banks[index])
        },
        checkStatus () {
            this.$http.post('/api/checkOrder',{orderId: this.orderId})
            .then((res) => {
                this.isShowSuccessDialog = true
                this.$emit('on-close-check-dialog')
            },(err) => {
                this.isShowFailDialog = true
                this.$emit('on-close-check-dialog')
            })
        },
        toOrderList () {
            this.$router.push({path: '/orderlist'})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
