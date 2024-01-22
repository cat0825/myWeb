// src/app/wechat.js
import Image from 'next/image'
import Layout from './layout' // 假设你有一个布局组件

const WeChatPage = () => {
  return (
    <Layout>
      <div className="wechat-container">
        {/* 这里放置你的图片和其他内容 */}
        <Image src="/assets/wechat.jpg" alt="WeChat QR Code" width={200} height={200} />
        {/* 确保图片的路径是相对于 public 目录的 */}
      </div>
    </Layout>
  )
}

export default WeChatPage
