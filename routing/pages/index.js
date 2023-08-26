import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
    
    const router = useRouter()
    
    const handleClick = () => {
        console.log('Placing your order')
        router.push('/products')
    }

    return (
        <div>
            <h1>Home Page</h1>
            <Link href='/blog'>
                Blog
            </Link>
            <Link href='/products'>
                Products
            </Link>
            <button onClick = {handleClick}>
                Place Order
            </button>
        </div>    
    )
}

export default Home