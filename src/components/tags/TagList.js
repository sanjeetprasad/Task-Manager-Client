import React, {useContext, useEffect} from "react"
import { Link } from 'react-router-dom'
import { TagContext } from "./TagProvider"
import {Tag} from "./Tag"


export const TagList = props => {
    // const history = useHistory()

    const {tags, getTags} = useContext(TagContext)
    console.log(tags)

    useEffect(() => {
        getTags()
    }, [])

    return (
        <>
            <div>
            {tags.map(t =><Tag key={t.id} tag={t} props={props}/>)}
            </div>

            <button onClick={() => {
                    props.history.push(`/tags/create`)
                }}>Create Tag!!!
        </button>

        </>
    )
}
