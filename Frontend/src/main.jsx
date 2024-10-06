import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Grammarly from './components/Items/Grammarly.jsx'
import Body from './components/Body.jsx'
import EnvatoElements from './components/Items/EnvatoElements.jsx'
import Canva from './components/Items/Canva.jsx'
import Storybase from './components/Items/Storybase.jsx'
import QuillBot from './components/Items/Quillbot.jsx'
import Wordtune from './components/Items/Wordtune.jsx'
import VistaCreate from './components/Items/Vistacreate.jsx'
import Ubersuggest from './components/Items/Ubersuggest.jsx'
import WordHero from './components/Items/WordHero.jsx'
import VidIQ from './components/Items/Vidiq.jsx'
import Freepik from './components/Items/Freepik.jsx'
import Scribd from './components/Items/Scribd.jsx'
import LinguixPro from './components/Items/LinguixPro.jsx'
import ChatGPT from './components/Items/ChatGPT.jsx'
import Indexification from './components/Items/Indexification.jsx'
import LinkedInLearning from './components/Items/LinkedInLearning.jsx'
import WordAI from './components/Items/WordAI.jsx'
import Skillshare from './components/Items/Skillshare.jsx'
import InVideo from './components/Items/InVideo.jsx'
import Moz from './components/Items/Moz.jsx'
import Seoptimer from './components/Items/Seoptimer.jsx'
import SpamZilla from './components/Items/SpamZilla.jsx'
import KWFinder from './components/Items/KWFinder.jsx'
import Vecteezy from './components/Items/Victeezy.jsx'
import WriterZen from './components/Items/WriterZen.jsx'
import KeywordToolIO from './components/Items/KeywordToolIo.jsx'
import IconScout from './components/Items/IconScout.jsx'
import Offeo from './components/Items/Offeo.jsx'
import PicMonkey from './components/Items/PicMonkey.jsx'
import GrowthBar from './components/Items/GrowthBar.jsx'
import AnswerThePublic from './components/Items/AnswerThePublic.jsx'
import SellTheTrend from './components/Items/SellTheTrend.jsx'
import DeginAI from './components/Items/DeginAI.jsx'
import Snapied from './components/Items/Snapied.jsx'
import Unbounce from './components/Items/Unbounce.jsx'
import LeonardoAI from './components/Items/LeonardoAI.jsx'
import Sider from './components/Items/Sider.jsx'
import Placeit from './components/Items/Placeit.jsx'
import Sincode from './components/Items/Sincode.jsx'
import Semrush from './components/Items/Semrush.jsx'
import EpidemicSound from './components/Items/EpidemicSound.jsx'
import Powtoons from './components/Items/Powtoon.jsx'
import AIToolsComparison from './components/AIToolsComparison.jsx'
import AnswerThePublicRoot from './components/Items/AnswerThePublicRoot.jsx'
import EnvatoElementsRoot from './components/Items/EnvatoElementsRoot.jsx'
import GrammarlyRoot from './components/Items/GrammarlyRoot.jsx'
import StorybaseRoot from './components/Items/StorybaseRoot.jsx'
import QuillBotRoot from './components/Items/QuillBotRoot.jsx'
import WordtuneRoot from './components/Items/WordtuneRoot.jsx'
import VistaCreateRoot from './components/Items/VistaCreateRoot.jsx'
import UbersuggestRoot from './components/Items/UbersuggestRoot.jsx'
import WordHeroRoot from './components/Items/WordHeroRoot.jsx'
import VidIQRoot from './components/Items/VidIQRoot.jsx'
import FreepikRoot from './components/Items/FreepikRoot.jsx'
import ScribdRoot from './components/Items/ScribdRoot.jsx'
import LinguixProRoot from './components/Items/LinguixProRoot.jsx'
import ChatGPTRoot from './components/Items/ChatGPTRoot.jsx'
import IndexificationRoot from './components/Items/IndexificationRoot.jsx'
import LinkedInLearningRoot from './components/Items/LinkedInLearningRoot.jsx'
import SkillshareRoot from './components/Items/SkillshareRoot.jsx'
import InVideoRoot from './components/Items/InVideoRoot.jsx'
import MozRoot from './components/Items/MozRoot.jsx'
import SeoptimerRoot from './components/Items/SeoptimerRoot.jsx'
import SpamZillaRoot from './components/Items/SpamZillaRoot.jsx'
import KWFinderRoot from './components/Items/KWFinderRoot.jsx'
import VecteezyRoot from './components/Items/VecteezyRoot.jsx'
import WriterZenRoot from './components/Items/WriterZenRoot.jsx'
import KeywordToolIORoot from './components/Items/KeywordToolIORoot.jsx'
import IconScoutRoot from './components/Items/IconScoutRoot.jsx'
import OffeoRoot from './components/Items/OffeoRoot.jsx'
import PicMonkeyRoot from './components/Items/PicMonkeyRoot.jsx'
import GrowthBarRoot from './components/Items/GrowthBarRoot.jsx'
import SellTheTrendRoot from './components/Items/SellTheTrendRoot.jsx'
import DeginAIRoot from './components/Items/DeginAIRoot.jsx'
import SnapiedRoot from './components/Items/SnapiedRoot.jsx'
import UnbounceRoot from './components/Items/UnbounceRoot.jsx'
import LeonardoAIRoot from './components/Items/LeonardoAIRoot.jsx'
import SiderRoot from './components/Items/SiderRoot.jsx'
import PlaceitRoot from './components/Items/PlaceitRoot.jsx'
import SincodeRoot from './components/Items/SincodeRoot.jsx'
import SemrushRoot from './components/Items/SemrushRoot.jsx'
import EpidemicSoundRoot from './components/Items/EpidemicSoundRoot.jsx'
import PowtoonRoot from './components/Items/PowtoonRoot.jsx'
import CanvaRoot from './components/Items/CanvaRoot.jsx'
import WordAIRoot from './components/Items/WordAIRoot.jsx'
import Powtoon from './components/Items/Powtoon.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/7882',
        element: <EnvatoElements />,
        children: [
          {
            path: '/7882',
            element: <EnvatoElementsRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/9533',
        element: <Grammarly />,
        children: [
          {
            path: '/9533',
            element: <GrammarlyRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/5809',
        element: <Canva />,
        children: [
          {
            path: '/5809',
            element: <CanvaRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/2525',
        element: <Storybase />,
        children: [
          {
            path: '/2525',
            element: <StorybaseRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/8556',
        element: <QuillBot />,
        children: [
          {
            path: '/8556',
            element: <QuillBotRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/7199',
        element: <Wordtune />,
        children: [
          {
            path: '/7199',
            element: <WordtuneRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/1816',
        element: <VistaCreate />,
        children: [
          {
            path: '/1816',
            element: <VistaCreateRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/9196',
        element: <Ubersuggest />,
        children: [
          {
            path: '/9196',
            element: <UbersuggestRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/2989',
        element: <WordHero />,
        children: [
          {
            path: '/2989',
            element: <WordHeroRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/8188',
        element: <VidIQ />,
        children: [
          {
            path: '/8188',
            element: <VidIQRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/5548',
        element: <Freepik />,
        children: [
          {
            path: '/5548',
            element: <FreepikRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/4053',
        element: <Scribd />,
        children: [
          {
            path: '/4053',
            element: <ScribdRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/1210',
        element: <LinguixPro />,
        children: [
          {
            path: '/1210',
            element: <LinguixProRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/5311',
        element: <ChatGPT />,
        children: [
          {
            path: '/5311',
            element: <ChatGPTRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/7265',
        element: <Indexification />,
        children: [
          {
            path: '/7265',
            element: <IndexificationRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/6742',
        element: <LinkedInLearning />,
        children: [
          {
            path: '/6742',
            element: <LinkedInLearningRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/4805',
        element: <WordAI />,
        children: [
          {
            path: '/4805',
            element: <WordAIRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/6234',
        element: <Skillshare />,
        children: [
          {
            path: '/6234',
            element: <SkillshareRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/1168',
        element: <InVideo />,
        children: [
          {
            path: '/1168',
            element: <InVideoRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/8730',
        element: <Moz />,
        children: [
          {
            path: '/8730',
            element: <MozRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/9630',
        element: <Seoptimer />,
        children: [
          {
            path: '/9630',
            element: <SeoptimerRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/1628',
        element: <SpamZilla />,
        children: [
          {
            path: '/1628',
            element: <SpamZillaRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/7724',
        element: <KWFinder />,
        children: [
          {
            path: '/7724',
            element: <KWFinderRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/6725',
        element: <Vecteezy />,
        children: [
          {
            path: '/6725',
            element: <VecteezyRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/9165',
        element: <WriterZen />,
        children: [
          {
            path: '/9165',
            element: <WriterZenRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/3187',
        element: <KeywordToolIO />,
        children: [
          {
            path: '/3187',
            element: <KeywordToolIORoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/7752',
        element: <IconScout />,
        children: [
          {
            path: '/7752',
            element: <IconScoutRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/6973',
        element: <Offeo />,
        children: [
          {
            path: '/6973',
            element: <OffeoRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/5285',
        element: <PicMonkey />,
        children: [
          {
            path: '/5285',
            element: <PicMonkeyRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/9147',
        element: <GrowthBar />,
        children: [
          {
            path: '/9147',
            element: <GrowthBarRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/8261',
        element: <AnswerThePublic />,
        children: [
          {
            path: '/8261',
            element: <AnswerThePublicRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/2792',
        element: <SellTheTrend />,
        children: [
          {
            path: '/2792',
            element: <SellTheTrendRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/9340',
        element: <DeginAI />,
        children: [
          {
            path: '/9340',
            element: <DeginAIRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/5731',
        element: <Snapied />,
        children: [
          {
            path: '/5731',
            element: <SnapiedRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/4619',
        element: <Unbounce />,
        children: [
          {
            path: '/4619',
            element: <UnbounceRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/5467',
        element: <LeonardoAI />,
        children: [
          {
            path: '/5467',
            element: <LeonardoAIRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/7758',
        element: <Sider />,
        children: [
          {
            path: '/7758',
            element: <SiderRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/9730',
        element: <Placeit />,
        children: [
          {
            path: '/9730',
            element: <PlaceitRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/4955',
        element: <Sincode />,
        children: [
          {
            path: '/4955',
            element: <SincodeRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/2947',
        element: <Semrush />,
        children: [
          {
            path: '/2947',
            element: <SemrushRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/3165',
        element: <EpidemicSound />,
        children: [
          {
            path: '/3165',
            element: <EpidemicSoundRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      },
      {
        path: '/8227',
        element: <Powtoon />,
        children: [
          {
            path: '/8227',
            element: <PowtoonRoot />
          },
          {
            path: 'aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ',
            element: <AIToolsComparison />
          }
        ],
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
