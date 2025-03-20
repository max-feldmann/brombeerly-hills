'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface HubSidebarNavitemProps {
    label: string,
    href: string,
    slug: string,
}

const HubSidebarNavitem = ({label, href, slug} : HubSidebarNavitemProps) => {
    const currentUrl = usePathname().split('/');
    console.log ("currenturl: " + currentUrl);
    console.log ("------slug: " + slug);

    return (
        <Link href={href} className={`${ currentUrl[currentUrl.length -1] === slug ? "text-primary" : "" }`}>
            {label}
        </Link>
    )
}

export default HubSidebarNavitem