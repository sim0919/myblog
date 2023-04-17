const posts = [
    {
        id: 1,
        title: "Cloud에 관해서",
        href: "/compute/compute1",
        description:
            "클라우드 환경의 기본적인 내용을 다룹니다. 왜 클라우드가 나오게 되었을까? 클라우드를 사용하면 어떤 이점이 있을까에 대해서 고민한 내용을 다루려고 합니다. 특히나 On-Premise(데이터 센터, 기존 서비실) 을 운영하는 것과 무엇이 차이이고 어떤 이점이 있는지를 집중적으로 고민하려고 합니다. ",
        imageUrl:
            "https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-big-cloud-computing-infrastructure-elements-connected-with-dashed-lines-vector-illustration_1284-30495.jpg",
        date: "2023.04.14",
        datetime: "TBD",
        category: { title: "Compute", href: "#" },
        author: {
            name: "Sim Jeong hun",
            role: "AWS FSI Solutions Architect",
            href: "https://www.linkedin.com/in/jeong-hun-sim-277b12b3/",
            imageUrl:
                "https://media.licdn.com/dms/image/D5603AQG6s5EjCnon7g/profile-displayphoto-shrink_200_200/0/1649384635445?e=1686787200&v=beta&t=fVqjVEajVx-6zDT9cxjQU175G3oFL07xI5_A-pw_hh0",
        },
    },
    {
        id: 2,
        title: "EC2, Elastic Compute에 대해서 알아보자!(TBD)",
        href: "#",
        description:
            "AWS 환경의 컴퓨팅 자원인 EC2, 어떤 특징을 가지고 있고, 어떻게 사용해야 효율적으로 사용할 수 있는지를 고민해 봅니다.  ",
        imageUrl:
            "https://images.ctfassets.net/vnw37aqa3feu/5xiax5bybQuqS3S3yzUv1r/25fd73c97b772e7362ae9a6921a75db0/tbd_og_meta_image.png",
        date: "TBD",
        datetime: "TBD",
        category: { title: "Compute", href: "#" },
        author: {
            name: "Sim Jeong hun",
            role: "AWS FSI Solutions Architect",
            href: "https://www.linkedin.com/in/jeong-hun-sim-277b12b3/",
            imageUrl:
                "https://media.licdn.com/dms/image/D5603AQG6s5EjCnon7g/profile-displayphoto-shrink_200_200/0/1649384635445?e=1686787200&v=beta&t=fVqjVEajVx-6zDT9cxjQU175G3oFL07xI5_A-pw_hh0",
        },
    },
];

export const ComputeList = () => {
    return (
        <div className="bg-white py-10 sm:py-15">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-linebd tracking-tight text-gray-900 sm:text-4xl">
                        Compute
                    </h2>
                    <p className="mt-2 font-linerg text-lg leading-8 text-gray-600">
                        컴퓨팅 자원, 일반적으로 호스트 서버나 가상 머신(VM)을
                        다루는 페이지 입니다. 여기서는 AWS 환경에서 Compute
                        자원인 EC2 와 관련된 내용을 다루게 됩니다.
                    </p>
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="relative isolate flex flex-col gap-8 lg:flex-row"
                            >
                                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time
                                            dateTime={post.datetime}
                                            className="text-gray-500"
                                        >
                                            {post.date}
                                        </time>
                                        <a
                                            href={post.category.href}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category.title}
                                        </a>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-gray-600">
                                            {post.description}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                        <div className="relative flex items-center gap-x-4">
                                            <img
                                                src={post.author.imageUrl}
                                                alt=""
                                                className="h-10 w-10 rounded-full bg-gray-50"
                                            />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">
                                                    <a href={post.author.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.author.name}
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">
                                                    {post.author.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
