const OpenAI = require('openai')

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

exports.generarSubtareas = async (tituloTarea) => {
    const completion = await client.chat.completions.create({
        model: "gpt-4o",
        response_format: { type: "json_object" },   // <-- fuerza JSON puro, sin texto extra
        messages: [
            {
                role: "system",
                content: `Eres un asistente que genera subtareas para una tarea dada.
                Responde ÚNICAMENTE con un JSON con esta estructura exacta:
                {
                  "tarea": "nombre de la tarea",
                  "subtareas": [
                    { "id": 1, "titulo": "...", "estimado_minutos": 30 },
                    { "id": 2, "titulo": "...", "estimado_minutos": 20 }
                  ]
                }
                Genera entre 3 y 5 subtareas concretas y accionables.`
            },
            {
                role: "user",
                content: `Genera subtareas para: "${tituloTarea}"`
            }
        ]
    })

    // La respuesta ya es JSON string garantizado — solo parseamos
    const resultado = JSON.parse(completion.choices[0].message.content)
    return resultado
}