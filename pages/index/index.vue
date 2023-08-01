<template>
	<view class="content">
		<!-- :style="'padding-top:' + menuButtonHeight + 'px'" -->
		<view>
			<van-nav-bar title="标题" 
				fixed
				placeholder
				@click-left="showDrawer()">
				<van-icon name="wap-nav" slot="left" size="30" />
			</van-nav-bar>
		</view>
		<view>
			<uni-drawer ref="showLeftDrawer" mode="left" :mask-click="true">
				<LeftSideBar :leftBarTop="menuButtonHeight"></LeftSideBar>
			</uni-drawer>
		</view>
		<Chat></Chat>
	</view>
</template>

<script>
	import LeftSideBar from '@/pages/sidebar/left-side-bar/left-side-bar.vue'
	import Chat from '@/pages/chat/chat.vue'
	
	export default {
		components: {
			LeftSideBar,
			Chat
		},
		data() {
			return {
				leftSidebarShow: false,
				menuButtonHeight: 0,
				isBack: false
			}
		},
		methods: {
			showDrawer() {
				this.$refs.showLeftDrawer.open()
			},
			closeDrawer() {
				this.$refs.showLeftDrawer.close()
			},
			getHight() {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.menuButtonHeight = menuButtonInfo.top
			}
		},
		onLoad() {
			this.getHight()
		}
	}
</script>

<style lang="scss">
</style>
