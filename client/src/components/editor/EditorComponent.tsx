import { useFileSystem } from "@/context/FileContext"
import useResponsive from "@/hooks/useResponsive"
import cn from "classnames"
import Editor from "./Editor"
import FileTab from "./FileTab"

function EditorComponent() {
    const { openFiles } = useFileSystem()
    const { minHeightReached } = useResponsive()

    if (openFiles.length <= 0) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#0b0b0f]">
    <h1 className="text-3xl font-semibold text-white mb-3">
        No File Open
    </h1>

    <p className="text-zinc-500 text-sm">
        Select or create a file to start coding
    </p>
</div>
        )
    }

    return (
        <main
            className={cn(
    "flex w-full flex-col overflow-x-auto md:h-screen bg-[#050505]",
    {
                "h-[calc(100vh-50px)]": !minHeightReached,
                "h-full": minHeightReached,
            })}
        >
            <FileTab />
            <Editor />
        </main>
    )
}

export default EditorComponent
