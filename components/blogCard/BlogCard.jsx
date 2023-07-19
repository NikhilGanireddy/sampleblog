import Image from "next/image";

const BlogCard = ({post: {author, title, description, image}}) => {

    return <div className=" rounded-2xl bg-white/10 backdrop-blur-sm p-4 flex flex-col w-full gap-6 items-center">
        <Image className="w-full h-auto rounded-2xl overflow-hidden max-h-[500px] object-center object-cover" src={image} alt={title} width={100} height={100}/>
        <div className="flex flex-col gap-4 items-center px-12 text-center">
            <h1 className="text-2xl font-semibold mb-">{title}</h1>
            <p className="text-sm font-light">{description}</p>
            <span className="text-xs font-light">{author}</span>
        </div>
    </div>
}

export default BlogCard