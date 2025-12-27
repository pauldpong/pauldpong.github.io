import Link from "next/link";
import Retrivers from "posts/retrievers";

export default function Recipe({ recipes }) {

  const a = recipes.map(recipe =>
    <Link href={`/recipes/${recipe.slug}`}
      >{recipe.title}</Link>
  )

  return <div className="h-screen flex justify-center items-center">
    <h1 className="text-white text-5xl font-[Instrument_Serif]">Receipes</h1>
    <ul>{a}</ul>
  
  </div>
}

export async function getStaticProps() {

  const recipes = Retrivers.getPostMetadata('content/recipes')

  return {
    props: {
      recipes,
    },
  }
}
