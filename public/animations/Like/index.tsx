'use client'

import Lottie from 'lottie-react'
import React, { AnimationEventHandler } from 'react'
import like_heart from './like-heart.json'

type LikeProps = {
    controller: boolean,
    onLoopComplete: AnimationEventHandler | undefined
}

export default function Like({
    controller,
    onLoopComplete }: LikeProps) {
    return (
        <>
            {
                controller &&
                <Lottie
                    animationData={like_heart}
                    style={{
                        width: 100,
                        height: 100,
                        position: 'absolute',
                        zIndex: 2
                    }}
                    onLoopComplete={onLoopComplete}
                />
            }
        </>
    )
}
