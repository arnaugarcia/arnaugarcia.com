import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {

    return (
        <Html>
            <Head>
                <script
                    src={`https://www.google.com/recaptcha/api.js?render=6Lcg7yoeAAAAACWp-OvBb2361m93f3fil53rzArx`}
                    async
                    defer
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
