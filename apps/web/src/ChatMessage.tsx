
function ChatMessage({ message, type, date }: any) {


    return (
        <div className='w-full'>
            {
                type === 'send' ? (
                    <div className="flex w-5/6 mt-2 space-x-3 ml-auto justify-end">
                        <div className='min-w-[300px]'>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                {
                                    message.split('###')[0].split('\n').map((line: any, index: any) => (
                                        <p key={index}>{line}<br /></p>
                                    ))
                                }
                            </div>
                            <span className="text-xs text-gray-500 leading-none mr-2">{date.toLocaleTimeString()}</span>
                            <span className="text-xs text-gray-500 leading-none">{date.toLocaleDateString()}</span>
                        </div>
                        <div className="flex flex-shrink-0 justify-center items-center h-10 w-10 rounded-full bg-gray-300">
                            <span>ME</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex mt-2 space-x-3 w-5/6">
                        <div className="flex flex-shrink-0 justify-center items-center h-10 w-10 rounded-full bg-gray-300">
                            <span>IA</span>
                        </div>
                        <div className="">
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                {
                                    message.split('###')[0].split('\n').map((line: any, index: any) => (
                                        <p key={index}>{line}<br /></p>
                                    ))
                                }
                            </div>
                            <span className="text-xs text-gray-500 leading-none mr-5">{date.toLocaleTimeString()}</span>
                            <span className="text-xs text-gray-500 leading-none">{date.toLocaleDateString()}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ChatMessage