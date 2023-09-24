'use client'

import { Input } from "@/components/ui/input"
import { useDebounce } from "@/hooks/use-debounce"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import qs from 'query-string'
import { ChangeEventHandler, useEffect, useState } from "react"

export const SearchInput = () =>{
    const router = useRouter();
    const searchparams = useSearchParams()

    const categoryId = searchparams.get('categoryId')
    const name= searchparams.get('name')
    
    const [value,setValue] = useState(name || '');
    const debounceValue = useDebounce<string>(value,500)
    const onChange:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setValue(e.target.value);
    }
    useEffect(()=>
    {
        const query = {
            name:debounceValue,
            categoryId:categoryId
        }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query, 
        },{skipEmptyString:true,skipNull:true})
            router.push(url)
    },[debounceValue,categoryId,router])

    return <div className="relative">
        <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/>
        <Input placeholder="Search... " className="pl-10 bg-primary/10" onChange={onChange} value={value}/>
    </div>
}