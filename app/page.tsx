"use client"

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);

  const handleNameSubmit = (e: any) => {
    e.preventDefault();
    if (name.trim()) {
      setShowPrompt(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 text-black">
      {showPrompt ? (
        <form onSubmit={handleNameSubmit} className="bg-white p-6 rounded shadow-md h-screen">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Digite seu primeiro nome:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      ) : (
        <div className="flex flex-col p-10 lg:w-1/2 gap-5">
          <h1 className="text-2xl font-bold">
            Boas vindas, {name}!
          </h1>
          <h2 className="font-semibold text-xl">Apresentação</h2>
          <p>
            Olá, {name}! Me chamo Patrick, sou aluno da turma do 3º ano J, e estou trazendo para vocês, em parceria com a <a href="https://www.instagram.com/world_educacional/" target="_blank"><strong className="text-blue-800 underline">World Educacional</strong></a>, uma oportunidade incrível de crescimento e aprendizado. É a chance perfeita para quem quer se preparar melhor para o futuro e desenvolver novas habilidades. Continue lendo para saber mais!
          </p>
          <h2 className="font-semibold text-xl">Presente</h2>
          <p>
            {name}, que tal aproveitar os <strong>15 dias</strong> sem aula em outubro para aprender uma habilidade nova e se profissionalizar? Esse é o momento perfeito para investir em você mesmo, adquirir novos conhecimentos e abrir portas para oportunidades futuras. Use esse tempo para se capacitar em algo que sempre quis, seja um curso técnico, uma nova língua ou uma habilidade que te diferencie no mercado de trabalho. Não deixe essa chance passar!
          </p>
          <p>
            A World Educacional está oferecendo vouchers de até <strong>50%</strong> de desconto em diversos cursos para você se capacitar e ampliar suas oportunidades! Aproveite essa chance única para fazer cursos de Designer, Programação, Design de Sobrancelha, Excel, Photoshop e muito mais. Não perca essa oportunidade de aprender uma nova habilidade ou se aperfeiçoar em uma área que sempre teve interesse.
          </p>
          <h2 className="font-semibold text-xl">Para professores</h2>
          <p>
            Para professores, a World Educacional está oferecendo uma variedade de oportunidades de qualificação! Estamos com pós-graduações em Educação Especial, além de outras áreas de pós, segunda licenciatura, segunda graduação, cursos de extensão e muito mais. É a chance perfeita para ampliar seus conhecimentos e se destacar ainda mais na sua carreira docente. Não perca essa oportunidade de crescer profissionalmente!
          </p>
          <h2 className="font-semibold text-xl">Como ganhar</h2>
          <p>É simples! Preencha o formulário com o curso desejado e seu nome, para que possamos enviar mais informações sobre o curso e garantir o seu presente. Ou, se preferir, clique no botão do WhatsApp e tire suas dúvidas diretamente comigo. Não deixe essa oportunidade passar, estou aqui para ajudar você a dar o próximo passo na sua formação!</p>
          <div className="flex flex-col w-full p-6 gap-4 items-center">
            <a href="#" className="p-4 w-full bg-purple-500 text-white text-center rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Preencher formulário
            </a>
            <a href="https://wa.me/seu-numero-de-whatsapp" target="_blank" rel="noopener noreferrer" className="p-4 w-full bg-green-500 text-white text-center rounded-lg shadow hover:bg-green-600 transition duration-300">
              Falar pelo WhatsApp
            </a>
          </div>

        </div>
      )}
    </div>
  );
}
