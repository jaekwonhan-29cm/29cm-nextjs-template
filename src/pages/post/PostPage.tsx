import { useRouter } from 'next/router'
import { usePostBody, usePostDesc, usePostTitle } from './PostPage.hooks'

export const PostPage = () => {
  const { query: { postId }, isReady } = useRouter()
  const postBody = usePostBody()
  const postTitle = usePostTitle()
  const postDesc = usePostDesc()

  if (!isReady) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>
        {`Post: ${postId}`}
      </h1>
      <div>
        {postTitle}
      </div>
      <div>
        {postDesc}
      </div>
      <div>
        {postBody}
      </div>
    </div>
  )
}