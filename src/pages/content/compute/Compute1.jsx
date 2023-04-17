export const Compute1 = () => {
    const post = {
        author: {
            name: "Sim Jeong hun",
            role: "AWS FSI Solutions Architect",
            href: "https://www.linkedin.com/in/jeong-hun-sim-277b12b3/",
            imageUrl:
                "https://media.licdn.com/dms/image/D5603AQG6s5EjCnon7g/profile-displayphoto-shrink_200_200/0/1649384635445?e=1686787200&v=beta&t=fVqjVEajVx-6zDT9cxjQU175G3oFL07xI5_A-pw_hh0",
        },
    };

    return (
        <div className="bg-white px-6 py-2 lg:px-8 font-linerg">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <div className="grid justify-items-end text-end">
                    <div className="relative flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                </a>
                            </p>
                            <p className="text-gray-600">{post.author.role}</p>
                        </div>
                        <img
                            src={post.author.imageUrl}
                            alt=""
                            className="h-10 w-10 rounded-full bg-gray-50"
                        />
                    </div>
                </div>
                <p className=" text-left text-sm leading-8">2023.04.14</p>
                <p className="text-base font-semibold leading-7 text-indigo-600">
                    Compute
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    클라우드에 관해서
                </h1>
                <p className="mt-6 text-base leading-8">
                    현재는 AWS를 비롯한 다양한 CSP(Cloud Service Provider)를
                    통해 클라우드 서비스에 대해서 조금은 익숙해져 있습니다.
                    그러나 이전에는 Cloud라고 하면 사진을 올려놓는 서비스나
                    데이터를 저장하는 공간 등에 대한 이해만 존재했습니다. 그러나
                    이곳에서 설명하고자 하는 내용은 클라우드 컴퓨팅(Cloud
                    Computing) 관점에서 클라우드를 다루고 있습니다. 클라우드
                    컴퓨팅은 인터넷 기반으로 컴퓨터 시스템 자원을 공유함으로써
                    데이터 처리 작업을 수행하는 기술입니다. 이를 통해 기존에는
                    비싼 비용과 많은 시간이 소요되던 IT 인프라 구축을 용이하게
                    할 수 있습니다. 따라서, 클라우드 컴퓨팅 관점에서 클라우드를
                    이해하고 활용하는 것이 현재와 앞으로 IT 산업에서 중요한
                    역할을 할 것입니다.
                </p>

                <h2 className="mt-2 py-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    클라우드는 무엇일까?
                </h2>
                <p className="font-lineth text-base leading-8">
                    클라우드는 IT 환경에서 필요한 리소스를 확장 가능하도록
                    추상화, 풀링, 공유하는 개념입니다. 이전에는 서버, 스토리지,
                    네트워크 등을 직접 구매하고 설치하는 등 많은 노력과 시간이
                    필요했습니다. 그러나 AWS에서 제공하는 클라우드 서비스는
                    인터넷에 접속하여 필요한 리소스를 필요한 만큼만 사용하고
                    지불하는 형태로, 매우 편리하게 사용할 수 있습니다. 과거에는
                    안정성이나 기술적인 이유로 클라우드 서비스를 사용하기
                    어려웠지만, 가상화 기술이 발전하면서 점점 친숙해졌습니다.
                    특히 스타트업과 같이 초기 비용이 부족한 회사에서는 클라우드
                    서비스를 이용하여 IT 환경을 구성하기 시작했습니다. 또한,
                    코로나19로 인해 언택트 활동이 활발해지면서 IT 서비스에 대한
                    수요가 급증하였습니다. 이에 따라 서버 공급이 충분치 못한
                    상황에서도 클라우드 서비스를 통해 빠르게 리소스를 제공하여
                    IT 서비스를 제공하는데 기여하였습니다.{" "}
                    <span className="font-bold">
                        이 처럼 클라우드는 고객이 필요할때 확장 가능한 리소스르
                        제공 할수 있는 IT 환경이다
                    </span>
                </p>
                <h2 className="mt-2 py-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    왜 클라우드는 관심을 받고 있을까요?
                </h2>
                <p className="font-lineth text-base leading-8">
                    언론이나 주요 인사의 말이 아닌 내 개인적인 생각으로는 아래와
                    같은 부분에서 클라우드가 더욱 주목 받게 된 것 같다.
                </p>
                <p className="ml-4 font-lineth font-bold text-base leading-8">
                    1. 민첩한 고객 채널의 변화
                </p>
                <p className="font-lineth text-base leading-8">
                    민첩한 고객 채널의 변화는 클라우드의 기본적인 개념에서부터
                    설명할 수 있습니다. 기존에는 기업에서 IT 서비스를 제공하기
                    위해 서버를 구매하고, 설치하고, 연결하고, 운영체제와
                    어플리케이션을 설치하는 등 많은 시간과 노력이 필요했습니다.
                    이와 달리, 클라우드는 최소한의 용량으로도 쉽게 서비스를
                    구성할 수 있습니다. 그리고 트래픽이 증가했을 때, Scale-Out을
                    통해 확장하고, 트래픽이 감소했을 때는 Scale-In을 통해 비용을
                    절감할 수 있습니다. 이는 클라우드의 기초적인 고객 채널의
                    변화에 대한 반응일 것입니다. 더 나아가 MSA(Micro-Service
                    Architecture) 관점에서 클라우드를 적용하면, 서비스를 더욱
                    민첩하게 개발하고 필요한 서비스만 증설할 수 있습니다. MSA
                    관점의 설명은 추후에 Container 서비스에서 다룰 예정입니다.
                </p>
                <p className="ml-4 font-lineth font-bold text-base leading-8">
                    2. AI 등 고성능 고비용 서비스의 사용
                </p>
                <p className="font-lineth text-base leading-8">
                    요즘에는 AI 서비스가 매우 중요한 역할을 하고 있습니다.
                    그러나 이런 AI 서비스를 제공하기 위해서는 단순한 모델이 아닌
                    복잡하고 어려운 모델을 만들기 위해서는 고성능의 GPU와 메모리
                    자원이 필요합니다. 그리고 충분한 자원과 재정이 있다면 문제
                    없겠지만 스타트업이나 중소기업의 경우에는 서버를
                    도입하기에는 너무 비싼 가격일 수 있습니다. 그러나 이런
                    경우에도 AI 모델에 대해서 충분히 검토 후 테스트를 진행하고,
                    Cloud에서 자원에 대해 필요한 만큼 사용하고 모델을 만들고
                    서비스를 배포할 수 있습니다. 이를 통해 충분한 자원과 재정이
                    없어도 AI 서비스를 제공할 수 있습니다. 물론, CSP에서도 GPU는
                    기본 서비스에 비해 비싸기는 합니다. 그러나 한 번에 GPU와
                    서버를 구매한 후 구성하는 비용보다는 훨씬 저렴하고 쉽게
                    구성할 수 있습니다. 따라서 스타트업이나 중소기업에서도 AI
                    서비스를 제공할 수 있도록 Cloud를 이용하는 것은 매우 좋은
                    선택일 것입니다.
                </p>
                <p className="ml-4 font-lineth font-bold text-base leading-8">
                    3. 분석 환경의 변화에 대응
                </p>
                <p className="font-lineth text-base leading-8">
                    분석 시스템을 구축하기 위해서는 많은 양의 데이터를 저장하고
                    처리하는 것이 필요합니다. 이 데이터 처리는 대규모의 CPU 및
                    메모리 자원과 고성능의 스토리지가 필요합니다. 그러나 이러한
                    자원은 매우 비싸기 때문에 스타트업이나 중소기업에서는 서버를
                    도입하기에는 너무 비싼 가격일 수 있습니다. 클라우드는 이
                    문제를 해결하기 위한 좋은 대안입니다. 클라우드는 대규모의
                    CPU 및 메모리 자원, 고성능의 스토리지를 제공합니다. 이를
                    통해 스타트업이나 중소기업에서도 충분한 자원과 재정 없이도
                    분석 시스템을 구축할 수 있게 됩니다. 또한, 클라우드는
                    데이터의 신뢰성을 보장합니다. 클라우드는 데이터를 여러 개의
                    서버에 분산하여 저장하므로 데이터 손실의 위험이 줄어듭니다.
                    또한, 클라우드는 보안성이 높은 서비스를 제공하여 데이터
                    유출의 위험을 줄일 수 있습니다. 또한, 클라우드는 유연한
                    확장성을 제공합니다. 분석 시스템에 데이터가 증가할 경우,
                    클라우드에서는 필요한 만큼 자원을 추가로 할당할 수 있습니다.
                    이를 통해 시스템의 성능에 영향을 주지 않으면서 시스템의
                    확장성을 높일 수 있습니다. 마지막으로, 클라우드는 지속적인
                    업데이트와 유지보수를 제공합니다. 클라우드는 사용자의 요구에
                    맞게 지속적으로 업데이트 및 유지보수를 수행하여 사용자가
                    항상 최신 기술을 활용할 수 있도록 지원합니다. 이러한
                    이유들로 인해 클라우드는 분석 시스템을 구축하는 데 있어서
                    매우 중요한 역할을 합니다.
                </p>
                <h2 className="mt-2 py-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    온프레미스 보다 클라우드가 좋은 이유?
                </h2>
                <p className="font-lineth text-base leading-8">
                    클라우드와 온프레미스는 기업에서 서버와 자원을 구축하는
                    방식에 큰 차이가 있습니다. 온프레미스는 기업 내부에서 서버와
                    자원을 구축하여 운영하는 방식이며, 클라우드는 인터넷을 통해
                    서버와 자원을 대여하여 사용하는 방식입니다. 클라우드를
                    사용하면 기업은 서버 및 자원을 구입하고 유지보수하는 비용을
                    절감할 수 있습니다. 이는 기업이 새로운 서비스를 출시하거나
                    기존 서비스를 확장하고자 할 때 매우 유용합니다. 클라우드
                    서비스는 필요한 만큼의 자원을 쉽게 추가할 수 있기 때문에
                    기업이 필요한 만큼의 자원을 확보할 수 있습니다. 또한,
                    클라우드는 유연성이 높아서 언제 어디서나 접근이 가능하기
                    때문에 기업은 유연하게 업무를 수행할 수 있습니다. 클라우드는
                    보안성이 높아서 데이터 유출 및 손실의 위험을 줄여줄 뿐만
                    아니라, 지속적인 업데이트와 유지보수를 제공하여 최신 기술을
                    활용할 수 있습니다. 이는 기업이 경쟁력을 유지하고 성장하는
                    데 매우 중요합니다. 또한, 클라우드는 서버와 자원을 대여하는
                    방식이므로 기업이 직접 서버와 자원을 구축하는 것보다 환경
                    보호 측면에서도 효율적입니다. 그러나 온프레미스도 여전히
                    일부 기업에서는 필요한 경우가 있습니다. 기업의 보안 정책이나
                    규제와 같은 이유로 인해 클라우드를 사용할 수 없는 경우가
                    있을 수 있습니다. 또한, 네트워크 지연 시간이나 대역폭 문제로
                    인해 클라우드를 사용하지 않을 수도 있습니다. 이러한 이유로
                    인해 기업이 클라우드를 사용할 것인지 온프레미스를 사용할
                    것인지는 기업의 상황에 따라 다르게 결정됩니다. 그러나 대개의
                    경우, 클라우드는 비용 효율성, 유연성, 보안성 및 최신 기술
                    활용 측면에서 온프레미스보다 우수한 선택지입니다.
                </p>
                <p className="mt-4 text-base leading-8">
                    클라우드를 사용하면 기업은 서버 및 자원을 구입하고
                    유지보수하는 비용을 절감할 수 있습니다. 또한, 클라우드는
                    확장성이 높아서 기업이 필요한 만큼 자원을 쉽게 추가할 수
                    있습니다. 또한, 언제 어디서든 접근이 가능하기 때문에 기업은
                    유연하게 업무를 수행할 수 있습니다. 클라우드는 보안성이
                    높아서 데이터 유출 및 손실의 위험을 줄여줄 뿐만 아니라,
                    지속적인 업데이트와 유지보수를 제공하여 최신 기술을 활용할
                    수 있습니다. 이러한 이유로 인해 클라우드는 기업이 경쟁력을
                    유지하고 성장하는 데 있어서 매우 중요한 역할을 할 것 입니다.
                </p>
            </div>
        </div>
    );
};
