// This is the Link API


import Link from 'next/link'

const Index = () => (
  <div>
	<Link href="/about">
		<button style={{ fontSize: 14 }}>About Page</button>	
	</Link>
	
    	<p>Hello Next.js</p>
  </div>
)

export default Index
