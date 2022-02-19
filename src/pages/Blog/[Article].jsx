import { useRouter } from "next/router"

const Article = () => {
    const router = useRouter()
  return (
    <div>Blog article {router.query.Article}</div>
  )
}

export default Article