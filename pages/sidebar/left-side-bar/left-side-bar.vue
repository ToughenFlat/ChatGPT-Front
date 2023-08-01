<template>
	<view class="header">
		<view class="uesr">
			
			<view class="fot-xh" :style="'padding-top:' + leftBarTop + 'px'">
				<navigator url="" hover-class="none">
					<view class="pic">
						<u-avatar src="/static/left-side-bar/avatar.png" size="110rpx"></u-avatar>
					</view>
					<view class="txt">
						<view class="name">
							<view class="h3">
								ChatGPT
							</view>
							<view class="phone">
								131****7473
							</view>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		
		<view class="ul-list1-xh">
			<view class="li">
				<navigator url="" hover-class="none">
					<view class="pic">
						<uni-icons type="pyq" size="30" color="#f43e3e" class="side-bar-icon"></uni-icons>
					</view>
					<view class="txt">
						<text class="icon-text">AI问答</text>
					</view>
				</navigator>
			</view>
			<view class="li">
				<navigator url="" hover-class="none">
					<view class="pic">
						<uni-icons type="font" size="30" color="#00e6ac" class="side-bar-icon"></uni-icons>
					</view>
					<view class="txt">
						<text class="icon-text">文本翻译</text>
					</view>
				</navigator>
			</view>
			<view class="li">
				<navigator url="" hover-class="none">
					<view class="pic">
						<uni-icons type="image" size="30" color="#00e6e6" class="side-bar-icon"></uni-icons>
					</view>
					<view class="txt">
						<text class="icon-text">AI绘画</text>
					</view>
				</navigator>
			</view>
			<view class="li">
				<navigator url="" hover-class="none">
					<view class="pic">
						<uni-icons type="link" size="30" color="#00e6e6" class="side-bar-icon"></uni-icons>
					</view>
					<view class="txt">
						<text class="icon-text">网页设计</text>
					</view>
				</navigator>
			</view>
			<view class="li">
				<navigator url="" hover-class="none">
					<view class="pic">
						<uni-icons type="compose" size="30" color="#00e6ac" class="side-bar-icon"></uni-icons>
					</view>
					<view class="txt">
						<text class="icon-text">语法纠正</text>
					</view>
				</navigator>
			</view>
			<view class="li">
				<navigator url="" hover-class="none">
					<view class="pic">
						<uni-icons type="phone-filled" size="30" color="#8c8c8c" class="side-bar-icon"></uni-icons>
					</view>
					<view class="txt" style="border-bottom: none;">
						<text class="icon-text">联系客服</text>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			leftBarTop: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import url("./css/left-side-bar.css");
	.side-bar-icon {
		line-height: 42rpx;
	}
	.icon-text {
		font-size: medium;
	}
</style>