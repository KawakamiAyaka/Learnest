import style from "@/app/feedback/feedback.module.scss"
import Canvas from "@/Components/Canvas/Canvas"
import StarComponents from "@/Components/Star/Star" 

export default function FeedbackForm() {
    return(
        <>
            <main className={style.main}>
                <Canvas />
                <StarComponents />
            </main>
        </>
    )
}