import { useRouter } from 'next/router';
import withLayout from '../../components/MyLayout';

const Post = () =>  {
  const router = useRouter();

  console.log(router)

  return (
      <>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
      </>
  );
}

export default withLayout(Post)
