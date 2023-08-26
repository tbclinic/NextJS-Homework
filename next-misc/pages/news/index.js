export default function News({ data }) {
  return <h1 className='content'>{data}</h1>
}

export async function getStaticProps(context) {
  return {
    props: {
      data: context.preview
      ? 'List of Draft Articles' 
      :'List of Published Articles',
    },
  }
}