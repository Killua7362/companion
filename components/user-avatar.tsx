'use client'


import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export const UserAvatar = ()=>{
    const {user}=useUser()

    return <div>
        <Avatar className="h-10 w-12 ">
            <AvatarImage src={user?.imageUrl}/>
            <AvatarFallback/>
        </Avatar>
    </div>
}