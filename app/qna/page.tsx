import { QnAChatInterface } from "@/components/qna-chat-interface"

export const metadata = {
    title: "QnA Assistant | Bits&Bytes",
    description: "Ask the official Bits&Bytes AI assistant any questions you have.",
}

export default function QnAPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
            <div className="w-full max-w-4xl max-h-[90vh]">
                <QnAChatInterface />
            </div>
        </div>
    )
}
