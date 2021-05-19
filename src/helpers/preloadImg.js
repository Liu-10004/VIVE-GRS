export const preloadImages = (imgs, onload, onerror) => {
  const imageList = imgs
  const images = []

  if (imageList.length === 0) return '没有图片要加载'

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < imageList.length; i++) {
    images[i] = new Image()
    images[i].src = imageList[i]
    images[i].onload = () => {
      onload(images[i])
    }
    images[i].onerror = () => {
      onerror(images[i])
    }
  }

  return null
}
