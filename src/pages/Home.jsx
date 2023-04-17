export const Home = () => {
    return (
        <div>
            <div className="font-linerg mx-auto max-w-2xl py-40 ">
                <div className="mb-8 flex justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Development & Management Log{" "}
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="font-linebd text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        클라우드 개발 및 운영 노트
                    </h1>
                    <p className="mx-4 font-lineth mt-6 text-sm sm:text-lg sm:leading-8 text-gray-600">
                        AWS 클라우드 환경에서 기초 부터 기본.
                    </p>
                    <p className="mx-4 font-lineth text-sm sm:text-lg sm:leading-8 text-gray-600">
                        그리고 운영중에 필요한 세부적인 관리 기능 까지 기록하고
                        업데이트 하는 개인 블로그
                    </p>
                </div>
            </div>
        </div>
    );
};
