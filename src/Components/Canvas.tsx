"use client";
import React, { useRef, useState, useEffect } from 'react';
import style from "@/Components/Canvas.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faPen, faTrashCan, faFont, faTextSlash } from '@fortawesome/free-solid-svg-icons';

// テキストアイテムのインターフェース
interface TextItem {
    id: number;
    text: string;
    x: number;
    y: number;
}

export default function Canvas() {
    // キャンバスの参照を保持するためのuseRef
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    // 現在のモードを管理するuseState
    const [mode, setMode] = useState<'pen' | 'eraser' | 'text' | 'delete'>('pen');
    // 描画中かどうかを管理するuseState
    const [isDrawing, setIsDrawing] = useState(false);
    // キャンバス上のテキストを管理するuseState
    const [texts, setTexts] = useState<TextItem[]>([]);
    // キャンバスの画像データを管理するuseState
    const [canvasImageData, setCanvasImageData] = useState<ImageData | null>(null);
    // 初期テキストサイズを14pxに設定
    const textSize = 14;

    // コンポーネントがマウントされたとき、依存関係が変更されたときに実行されるuseEffect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        // キャンバスを再描画する関数
        const render = () => {
            if (canvasImageData) {
                context.putImageData(canvasImageData, 0, 0);
            } else {
                context.clearRect(0, 0, canvas.width, canvas.height);
            }
            texts.forEach(text => {
                const lines = text.text.split('\n');
                lines.forEach((line, index) => {
                    context.font = `${textSize}px Arial`;
                    context.fillStyle = 'black';
                    context.fillText(line, text.x, text.y + (index * textSize));
                });
            });
        };

        // マウスが押されたときのイベントハンドラ
        const handleMouseDown = (event: MouseEvent) => {
            if (mode === 'text') {
                const text = prompt('Enter text (use \\n for new line):');
                if (text) {
                    const newText = {
                        id: texts.length > 0 ? texts[texts.length - 1].id + 1 : 1,
                        text: text,
                        x: event.clientX - canvas.offsetLeft,
                        y: event.clientY - canvas.offsetTop
                    };
                    setTexts([...texts, newText]);
                }
            } else if (mode === 'delete') {
                const x = event.clientX - canvas.offsetLeft;
                const y = event.clientY - canvas.offsetTop;
                const updatedTexts = texts.filter(text => {
                    const lines = text.text.split('\n');
                    const textHeight = lines.length * textSize;
                    const textWidth = Math.max(...lines.map(line => context.measureText(line).width));
                    return !(x >= text.x && x <= text.x + textWidth && y >= text.y - textSize && y <= text.y + textHeight);
                });
                setTexts(updatedTexts);
            } else {
                setIsDrawing(true);
                context.beginPath();
                context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            }
        };

        // マウスが離されたときのイベントハンドラ
        const handleMouseUp = () => {
            if (isDrawing) {
                const canvas = canvasRef.current;
                if (canvas) {
                    const context = canvas.getContext('2d');
                    if (context) {
                        setCanvasImageData(context.getImageData(0, 0, canvas.width, canvas.height));
                    }
                }
            }
            setIsDrawing(false);
            context.closePath();
        };

        // マウスが動いたときのイベントハンドラ
        const handleMouseMove = (event: MouseEvent) => {
            if (!isDrawing || mode === 'text') return;

            context.lineWidth = mode === 'eraser' ? 20 : 2;
            context.lineCap = 'round';
            context.strokeStyle = mode === 'eraser' ? 'white' : 'red';

            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            context.stroke();
            context.beginPath();
            context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        };

        // イベントリスナーを追加
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mousemove', handleMouseMove);

        // 初回レンダリング時の描画
        render();

        // クリーンアップ関数
        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mode, isDrawing, texts, textSize, canvasImageData]);

    // キャンバスをリセットする関数
    const handleReset = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);
        setTexts([]);
        setCanvasImageData(null);
    };

    return (
        <>
            <main className={style.main}>
                <div>
                    <h2>フィーフォバックを書き込もう！</h2>
                    <canvas className={style.canvas} ref={canvasRef} width={700} height={500}></canvas>
                    <div>
                        <button 
                            onClick={() => setMode('pen')} 
                            className={`${style.button} ${mode === 'pen' ? style.selected : ''}`}
                        >
                            <FontAwesomeIcon icon={faPen} className={style.btnStyle} style={{ color: mode === 'pen' ? 'blue' : 'black' }} />
                        </button>
                        <button 
                            onClick={() => setMode('eraser')} 
                            className={`${style.button} ${mode === 'eraser' ? style.selected : ''}`}
                        >
                            <FontAwesomeIcon icon={faEraser} className={style.btnStyle} style={{ color: mode === 'eraser' ? 'blue' : 'black' }} />
                        </button>
                        <button 
                            onClick={() => setMode('text')} 
                            className={`${style.button} ${mode === 'text' ? style.selected : ''}`}
                        >
                            <FontAwesomeIcon icon={faFont} className={style.btnStyle} style={{ color: mode === 'text' ? 'blue' : 'black' }} />
                        </button>
                        <button 
                            onClick={() => setMode('delete')} 
                            className={`${style.button} ${mode === 'delete' ? style.selected : ''}`}
                        >
                            <FontAwesomeIcon icon={faTextSlash} className={style.btnStyle} style={{ color: mode === 'delete' ? 'blue' : 'black' }} />
                        </button>
                        <button onClick={handleReset} className={style.button}>
                            <FontAwesomeIcon icon={faTrashCan} className={style.btnStyle} />
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
