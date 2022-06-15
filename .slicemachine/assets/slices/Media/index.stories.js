import MyComponent from '../../../../slices/Media';

export default {
  title: 'slices/Media'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"media","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Video = () => <MyComponent slice={{"variation":"video","name":"Video","slice_type":"media","items":[],"primary":{"video":{"title":"Prismic January Product Meetup","author_name":"Prismic","author_url":"https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA","type":"video","height":113,"width":200,"version":"1.0","provider_name":"YouTube","provider_url":"https://www.youtube.com/","thumbnail_height":360,"thumbnail_width":480,"thumbnail_url":"https://i.ytimg.com/vi/fiOwHYFkUz0/hqdefault.jpg","html":"<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/fiOwHYFkUz0?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"}},"id":"_Video"}} />
_Video.storyName = 'Video'
