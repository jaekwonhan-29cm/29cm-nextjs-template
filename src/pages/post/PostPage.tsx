import { useRouter } from 'next/router'

export const PostPage = () => {
  const { query: { postId }, isReady } = useRouter()

  if (!isReady) {
    return <div>Loading...</div>
  }

  return (
    <h1>
      {`Post: ${postId}`}
    </h1>
  )
}