export default function ChannelList() {
    const channelList = [
        {
            id: 0,
            name: "#random"
        },
        {
            id: 1,
            name: "#react"
        },
        {
            id: 2,
            name: "#announcements"
        }
    ]

    // const liList = []
    // for(let i = 0; i < channelList.length; i++) {
    //     liList.push(<li>{channelList[i].name}</li>)
    // }

    // [ <li>#random</li>, <li>#react</li>, <li>#announcements</li>]

    return (
        <ul>
            {channelList.map((channel) => <li key={channel.id}>{channel.name}</li>)}
        </ul>
    )
}