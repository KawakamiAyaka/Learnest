"use client";
import { useState } from "react";
import style from "@/Components/Star/Star.module.scss";
import Link from "next/link";

export default function InputPost() {
    const [designRating, setDesignRating] = useState(0);
    const [colorRating, setColorRating] = useState(0);
    const [layoutRating, setLayoutRating] = useState(0);
    const [creativityRating, setCreativityRating] = useState(0);
    const [feedback, setFeedback] = useState("");

    const handleRating = (
        setRating: React.Dispatch<React.SetStateAction<number>>,
        value: number
    ) => {
        setRating(value);
    };

    return (
        <>
            <div className={style.main}>
                <div>
                    <h2 className={style.h2}>[ 評価アンケート ]</h2>
                    <h3>1. デザイン全体評価</h3>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <button
                            className={style.StarBtn}
                            key={value}
                            onClick={() => handleRating(setDesignRating, value)}
                            style={{
                                fontSize: "30px",
                                color: value <= designRating ? "gold" : "lightgray",
                                cursor: "pointer",
                            }}
                        >
                            ★
                        </button>
                    ))}

                    <h3>2. 色についての評価</h3>
                    {[1, 2, 3].map((value) => (
                        <button
                            className={style.StarBtn}
                            key={value}
                            onClick={() => handleRating(setColorRating, value)}
                            style={{
                                fontSize: "30px",
                                color: value <= colorRating ? "gold" : "lightgray",
                                cursor: "pointer",
                            }}
                        >
                            ★
                        </button>
                    ))}

                    <h3>3. 形やレイアウトの評価</h3>
                    {[1, 2, 3].map((value) => (
                        <button
                            className={style.StarBtn}
                            key={value}
                            onClick={() => handleRating(setLayoutRating, value)}
                            style={{
                                fontSize: "30px",
                                color: value <= layoutRating ? "gold" : "lightgray",
                                cursor: "pointer",
                            }}
                        >
                            ★
                        </button>
                    ))}

                    <h3>4. 創造性の評価</h3>
                    {[1, 2, 3].map((value) => (
                        <button
                            className={style.StarBtn}
                            key={value}
                            onClick={() => handleRating(setCreativityRating, value)}
                            style={{
                                fontSize: "30px",
                                color: value <= creativityRating ? "gold" : "lightgray",
                                cursor: "pointer",
                            }}
                        >
                            ★
                        </button>
                    ))}
                    <h3>感想、気づいたこと、アドバイス等</h3>
                    <textarea
                        className={style.text}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={5}
                        cols={50}
                        placeholder="ここに入力してください"
                    ></textarea>
                </div>
                <Link className={style.link} href="/feedbackAfter">
                    送信
                </Link>
            </div>
        </>
    );
}
