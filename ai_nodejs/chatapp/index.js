import 'dotenv/config'

import OPENAI from 'openai'
const openai = new OPENAI({
    apiKey:process.env.OPENAI_API_KEY
})

const result = await openai.chat.completions.create({
    model:'gpt-3.5-turbo',
    messages:[
        {
            role:'system',
            content:'you are an AI assistant'
        },
        {
            role:'user',
            content:'Hi!'
        }
    ],

})

console.log(result);