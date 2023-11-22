import { html } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import LightbulbStroke12Icon from "@dependable/icons/LightbulbStroke12Icon";

import I123Fill16Icon from "@dependable/icons/I123Fill16Icon";
import AdjustFill16Icon from "@dependable/icons/AdjustFill16Icon";
import AlertErrorFill16Icon from "@dependable/icons/AlertErrorFill16Icon";
import AlertWarningFill16Icon from "@dependable/icons/AlertWarningFill16Icon";
import AlignCenterFill16Icon from "@dependable/icons/AlignCenterFill16Icon";
import AlignJustifyFill16Icon from "@dependable/icons/AlignJustifyFill16Icon";
import AlignLeftFill16Icon from "@dependable/icons/AlignLeftFill16Icon";
import AlignRightFill16Icon from "@dependable/icons/AlignRightFill16Icon";
import AltTextFill16Icon from "@dependable/icons/AltTextFill16Icon";
import ArrowLeftFill16Icon from "@dependable/icons/ArrowLeftFill16Icon";
import ArrowLeftSmFill16Icon from "@dependable/icons/ArrowLeftSmFill16Icon";
import ArrowLeftUpFill16Icon from "@dependable/icons/ArrowLeftUpFill16Icon";
import ArrowRetweetFill16Icon from "@dependable/icons/ArrowRetweetFill16Icon";
import ArrowReverseFill16Icon from "@dependable/icons/ArrowReverseFill16Icon";
import ArrowTrendingFill16Icon from "@dependable/icons/ArrowTrendingFill16Icon";
import AsteriskFill16Icon from "@dependable/icons/AsteriskFill16Icon";
import AtFill16Icon from "@dependable/icons/AtFill16Icon";
import BarChartFill16Icon from "@dependable/icons/BarChartFill16Icon";
import BasketballFill16Icon from "@dependable/icons/BasketballFill16Icon";
import BoldFill16Icon from "@dependable/icons/BoldFill16Icon";
import BookClosedFill16Icon from "@dependable/icons/BookClosedFill16Icon";
import BookOpenFill16Icon from "@dependable/icons/BookOpenFill16Icon";
import Box3dFill16Icon from "@dependable/icons/Box3dFill16Icon";
import BuildingFill16Icon from "@dependable/icons/BuildingFill16Icon";
import CalendarFill16Icon from "@dependable/icons/CalendarFill16Icon";
import CameraFill16Icon from "@dependable/icons/CameraFill16Icon";
import CarFill16Icon from "@dependable/icons/CarFill16Icon";
import CenterFill16Icon from "@dependable/icons/CenterFill16Icon";
import CheckBadgeFill16Icon from "@dependable/icons/CheckBadgeFill16Icon";
import CheckBoxDoubleFill16Icon from "@dependable/icons/CheckBoxDoubleFill16Icon";
import CheckBoxFill16Icon from "@dependable/icons/CheckBoxFill16Icon";
import CheckCircleFill16Icon from "@dependable/icons/CheckCircleFill16Icon";
import CheckDoubleFill16Icon from "@dependable/icons/CheckDoubleFill16Icon";
import CheckLgFill16Icon from "@dependable/icons/CheckLgFill16Icon";
import CheckSmFill16Icon from "@dependable/icons/CheckSmFill16Icon";
import ChevronBoxFill16Icon from "@dependable/icons/ChevronBoxFill16Icon";
import ChevronDoubleDownFill16Icon from "@dependable/icons/ChevronDoubleDownFill16Icon";
import ChevronDoubleLeftFill16Icon from "@dependable/icons/ChevronDoubleLeftFill16Icon";
import ChevronDoubleRightFill16Icon from "@dependable/icons/ChevronDoubleRightFill16Icon";
import ChevronDoubleUpFill16Icon from "@dependable/icons/ChevronDoubleUpFill16Icon";
import ChevronDownFill16Icon from "@dependable/icons/ChevronDownFill16Icon";
import ChevronLeftFill16Icon from "@dependable/icons/ChevronLeftFill16Icon";
import ChevronRightFill16Icon from "@dependable/icons/ChevronRightFill16Icon";
import ChevronUpFill16Icon from "@dependable/icons/ChevronUpFill16Icon";
import CircleFill16Icon from "@dependable/icons/CircleFill16Icon";
import CircleFullFill16Icon from "@dependable/icons/CircleFullFill16Icon";
import CircleLineFill16Icon from "@dependable/icons/CircleLineFill16Icon";
import CircleSmFill16Icon from "@dependable/icons/CircleSmFill16Icon";
import ClipboardBlankFill16Icon from "@dependable/icons/ClipboardBlankFill16Icon";
import ClipboardCheckFill16Icon from "@dependable/icons/ClipboardCheckFill16Icon";
import ClipboardListFill16Icon from "@dependable/icons/ClipboardListFill16Icon";
import ClockCycleFill16Icon from "@dependable/icons/ClockCycleFill16Icon";
import ClockFill16Icon from "@dependable/icons/ClockFill16Icon";
import ClockInFill16Icon from "@dependable/icons/ClockInFill16Icon";
import ClockOutFill16Icon from "@dependable/icons/ClockOutFill16Icon";
import CopyFill16Icon from "@dependable/icons/CopyFill16Icon";
import CreditCardFill16Icon from "@dependable/icons/CreditCardFill16Icon";
import CssFill16Icon from "@dependable/icons/CssFill16Icon";
import CursorArrowFill16Icon from "@dependable/icons/CursorArrowFill16Icon";
import CutleryFill16Icon from "@dependable/icons/CutleryFill16Icon";
import DashFill16Icon from "@dependable/icons/DashFill16Icon";
import DatabaseFill16Icon from "@dependable/icons/DatabaseFill16Icon";
import DecimalFill16Icon from "@dependable/icons/DecimalFill16Icon";
import DirectionLtrFill16Icon from "@dependable/icons/DirectionLtrFill16Icon";
import DirectionRtlFill16Icon from "@dependable/icons/DirectionRtlFill16Icon";
import DocumentSearchFill16Icon from "@dependable/icons/DocumentSearchFill16Icon";
import DownloadFill16Icon from "@dependable/icons/DownloadFill16Icon";
import DuplicateFill16Icon from "@dependable/icons/DuplicateFill16Icon";
import EditRedoFill16Icon from "@dependable/icons/EditRedoFill16Icon";
import EditUndoFill16Icon from "@dependable/icons/EditUndoFill16Icon";
import EmailFill16Icon from "@dependable/icons/EmailFill16Icon";
import EraserFill16Icon from "@dependable/icons/EraserFill16Icon";
import ExitFill16Icon from "@dependable/icons/ExitFill16Icon";
import EyeFill16Icon from "@dependable/icons/EyeFill16Icon";
import EyeHideFill16Icon from "@dependable/icons/EyeHideFill16Icon";
import FacebookFill16Icon from "@dependable/icons/FacebookFill16Icon";
import FileDocumentFill16Icon from "@dependable/icons/FileDocumentFill16Icon";
import FileErrorFill16Icon from "@dependable/icons/FileErrorFill16Icon";
import FileGenericFill16Icon from "@dependable/icons/FileGenericFill16Icon";
import FileImageFill16Icon from "@dependable/icons/FileImageFill16Icon";
import FilePdfFill16Icon from "@dependable/icons/FilePdfFill16Icon";
import FilePresentationFill16Icon from "@dependable/icons/FilePresentationFill16Icon";
import FileSpreadsheetFill16Icon from "@dependable/icons/FileSpreadsheetFill16Icon";
import FileZipFill16Icon from "@dependable/icons/FileZipFill16Icon";
import FilterFill16Icon from "@dependable/icons/FilterFill16Icon";
import FlagFill16Icon from "@dependable/icons/FlagFill16Icon";
import FolderClosedFill16Icon from "@dependable/icons/FolderClosedFill16Icon";
import FolderOpenFill16Icon from "@dependable/icons/FolderOpenFill16Icon";
import FullWidthFill16Icon from "@dependable/icons/FullWidthFill16Icon";
import GearFill16Icon from "@dependable/icons/GearFill16Icon";
import GithubFill16Icon from "@dependable/icons/GithubFill16Icon";
import GlobeFill16Icon from "@dependable/icons/GlobeFill16Icon";
import Grid2x2Fill16Icon from "@dependable/icons/Grid2x2Fill16Icon";
import Grid3x3Fill16Icon from "@dependable/icons/Grid3x3Fill16Icon";
import HeadingFill16Icon from "@dependable/icons/HeadingFill16Icon";
import HeartFill16Icon from "@dependable/icons/HeartFill16Icon";
import HistoryFill16Icon from "@dependable/icons/HistoryFill16Icon";
import HomeFill16Icon from "@dependable/icons/HomeFill16Icon";
import HorizontalRuleFill16Icon from "@dependable/icons/HorizontalRuleFill16Icon";
import ImageFill16Icon from "@dependable/icons/ImageFill16Icon";
import InboxFill16Icon from "@dependable/icons/InboxFill16Icon";
import IndentDecreaseFill16Icon from "@dependable/icons/IndentDecreaseFill16Icon";
import IndentIncreaseFill16Icon from "@dependable/icons/IndentIncreaseFill16Icon";
import InfoFill16Icon from "@dependable/icons/InfoFill16Icon";
import InterlockingRingsFill16Icon from "@dependable/icons/InterlockingRingsFill16Icon";
import ItalicFill16Icon from "@dependable/icons/ItalicFill16Icon";
import LeafFill16Icon from "@dependable/icons/LeafFill16Icon";
import LifesaverFill16Icon from "@dependable/icons/LifesaverFill16Icon";
import LightbulbFill16Icon from "@dependable/icons/LightbulbFill16Icon";
import LightningBoltFill16Icon from "@dependable/icons/LightningBoltFill16Icon";
import LineGraphFill16Icon from "@dependable/icons/LineGraphFill16Icon";
import LineSocialFill16Icon from "@dependable/icons/LineSocialFill16Icon";
import LinkFill16Icon from "@dependable/icons/LinkFill16Icon";
import LinkRemoveFill16Icon from "@dependable/icons/LinkRemoveFill16Icon";
import LinkedinFill16Icon from "@dependable/icons/LinkedinFill16Icon";
import ListBulletFill16Icon from "@dependable/icons/ListBulletFill16Icon";
import ListNumberFill16Icon from "@dependable/icons/ListNumberFill16Icon";
import ListNumberRtlFill16Icon from "@dependable/icons/ListNumberRtlFill16Icon";
import LocationFill16Icon from "@dependable/icons/LocationFill16Icon";
import LockLockedFill16Icon from "@dependable/icons/LockLockedFill16Icon";
import LockUnlockedFill16Icon from "@dependable/icons/LockUnlockedFill16Icon";
import MarkupFill16Icon from "@dependable/icons/MarkupFill16Icon";
import MaximizeFill16Icon from "@dependable/icons/MaximizeFill16Icon";
import MegaphoneFill16Icon from "@dependable/icons/MegaphoneFill16Icon";
import MenuFill16Icon from "@dependable/icons/MenuFill16Icon";
import MessengerFill16Icon from "@dependable/icons/MessengerFill16Icon";
import MicrophoneOffFill16Icon from "@dependable/icons/MicrophoneOffFill16Icon";
import MicrophoneOnFill16Icon from "@dependable/icons/MicrophoneOnFill16Icon";
import MinimizeFill16Icon from "@dependable/icons/MinimizeFill16Icon";
import MobilePhoneFill16Icon from "@dependable/icons/MobilePhoneFill16Icon";
import MonitorFill16Icon from "@dependable/icons/MonitorFill16Icon";
import MultilineFill16Icon from "@dependable/icons/MultilineFill16Icon";
import NewWindowFill16Icon from "@dependable/icons/NewWindowFill16Icon";
import NotesFill16Icon from "@dependable/icons/NotesFill16Icon";
import NotificationFill16Icon from "@dependable/icons/NotificationFill16Icon";
import NumberFill16Icon from "@dependable/icons/NumberFill16Icon";
import OriginalSizeFill16Icon from "@dependable/icons/OriginalSizeFill16Icon";
import OverflowFill16Icon from "@dependable/icons/OverflowFill16Icon";
import OverflowVerticalFill16Icon from "@dependable/icons/OverflowVerticalFill16Icon";
import PaletteFill16Icon from "@dependable/icons/PaletteFill16Icon";
import PanelsFill16Icon from "@dependable/icons/PanelsFill16Icon";
import ParenthesesFill16Icon from "@dependable/icons/ParenthesesFill16Icon";
import PauseFill16Icon from "@dependable/icons/PauseFill16Icon";
import PencilFill16Icon from "@dependable/icons/PencilFill16Icon";
import PhoneCallEndFill16Icon from "@dependable/icons/PhoneCallEndFill16Icon";
import PhoneCallInFill16Icon from "@dependable/icons/PhoneCallInFill16Icon";
import PhoneCallOutFill16Icon from "@dependable/icons/PhoneCallOutFill16Icon";
import PhoneCallPauseFill16Icon from "@dependable/icons/PhoneCallPauseFill16Icon";
import PhoneCallSpeakerFill16Icon from "@dependable/icons/PhoneCallSpeakerFill16Icon";
import PhoneCallTransferFill16Icon from "@dependable/icons/PhoneCallTransferFill16Icon";
import PhoneCallTransferOnlyFill16Icon from "@dependable/icons/PhoneCallTransferOnlyFill16Icon";
import PhoneFill16Icon from "@dependable/icons/PhoneFill16Icon";
import PinFill16Icon from "@dependable/icons/PinFill16Icon";
import PinRemoveFill16Icon from "@dependable/icons/PinRemoveFill16Icon";
import PlayCircleFill16Icon from "@dependable/icons/PlayCircleFill16Icon";
import PlayFill16Icon from "@dependable/icons/PlayFill16Icon";
import PlugFill16Icon from "@dependable/icons/PlugFill16Icon";
import PlusCircleFill16Icon from "@dependable/icons/PlusCircleFill16Icon";
import PlusFill16Icon from "@dependable/icons/PlusFill16Icon";
import PuzzlePieceFill16Icon from "@dependable/icons/PuzzlePieceFill16Icon";
import QuestionMarkFill16Icon from "@dependable/icons/QuestionMarkFill16Icon";
import QuoteFill16Icon from "@dependable/icons/QuoteFill16Icon";
import RearrangeFill16Icon from "@dependable/icons/RearrangeFill16Icon";
import RecordFill16Icon from "@dependable/icons/RecordFill16Icon";
import ReloadFill16Icon from "@dependable/icons/ReloadFill16Icon";
import SandboxFill16Icon from "@dependable/icons/SandboxFill16Icon";
import SearchFill16Icon from "@dependable/icons/SearchFill16Icon";
import ShapesFill16Icon from "@dependable/icons/ShapesFill16Icon";
import ShareFill16Icon from "@dependable/icons/ShareFill16Icon";
import ShieldFill16Icon from "@dependable/icons/ShieldFill16Icon";
import ShoppingCartFill16Icon from "@dependable/icons/ShoppingCartFill16Icon";
import SignpostFill16Icon from "@dependable/icons/SignpostFill16Icon";
import SlackFill16Icon from "@dependable/icons/SlackFill16Icon";
import SmileSlightFill16Icon from "@dependable/icons/SmileSlightFill16Icon";
import SmileyFill16Icon from "@dependable/icons/SmileyFill16Icon";
import SortFill16Icon from "@dependable/icons/SortFill16Icon";
import SpeechBubbleConversationFill16Icon from "@dependable/icons/SpeechBubbleConversationFill16Icon";
import SpeechBubbleLightningBoltFill16Icon from "@dependable/icons/SpeechBubbleLightningBoltFill16Icon";
import SpeechBubblePlainFill16Icon from "@dependable/icons/SpeechBubblePlainFill16Icon";
import StarFill16Icon from "@dependable/icons/StarFill16Icon";
import TableFill16Icon from "@dependable/icons/TableFill16Icon";
import TagFill16Icon from "@dependable/icons/TagFill16Icon";
import TerminalCliFill16Icon from "@dependable/icons/TerminalCliFill16Icon";
import TerminalWindowFill16Icon from "@dependable/icons/TerminalWindowFill16Icon";
import TextColorFill16Icon from "@dependable/icons/TextColorFill16Icon";
import TextFill16Icon from "@dependable/icons/TextFill16Icon";
import ThumbsDownFill16Icon from "@dependable/icons/ThumbsDownFill16Icon";
import ThumbsUpFill16Icon from "@dependable/icons/ThumbsUpFill16Icon";
import TranslationCreatedFill16Icon from "@dependable/icons/TranslationCreatedFill16Icon";
import TranslationDeletedFill16Icon from "@dependable/icons/TranslationDeletedFill16Icon";
import TranslationExistsFill16Icon from "@dependable/icons/TranslationExistsFill16Icon";
import TranslationOutdatedFill16Icon from "@dependable/icons/TranslationOutdatedFill16Icon";
import TranslationUpdatedFill16Icon from "@dependable/icons/TranslationUpdatedFill16Icon";
import TrashFill16Icon from "@dependable/icons/TrashFill16Icon";
import TwitterFill16Icon from "@dependable/icons/TwitterFill16Icon";
import UnderlineFill16Icon from "@dependable/icons/UnderlineFill16Icon";
import UploadFill16Icon from "@dependable/icons/UploadFill16Icon";
import UserCircleFill16Icon from "@dependable/icons/UserCircleFill16Icon";
import UserFollowFill16Icon from "@dependable/icons/UserFollowFill16Icon";
import UserGroupFill16Icon from "@dependable/icons/UserGroupFill16Icon";
import UserListFill16Icon from "@dependable/icons/UserListFill16Icon";
import UserSoloFill16Icon from "@dependable/icons/UserSoloFill16Icon";
import UserUnfollowFill16Icon from "@dependable/icons/UserUnfollowFill16Icon";
import VoicemailFill16Icon from "@dependable/icons/VoicemailFill16Icon";
import VolumeMutedFill16Icon from "@dependable/icons/VolumeMutedFill16Icon";
import VolumeUnmutedFill16Icon from "@dependable/icons/VolumeUnmutedFill16Icon";
import WechatFill16Icon from "@dependable/icons/WechatFill16Icon";
import WhatsappFill16Icon from "@dependable/icons/WhatsappFill16Icon";
import WrapLeftFill16Icon from "@dependable/icons/WrapLeftFill16Icon";
import WrapRightFill16Icon from "@dependable/icons/WrapRightFill16Icon";
import XCircleFill16Icon from "@dependable/icons/XCircleFill16Icon";
import XFill16Icon from "@dependable/icons/XFill16Icon";
import ZendeskFill16Icon from "@dependable/icons/ZendeskFill16Icon";

const columnStyles = css`
  & {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
    gap: 1em;
    fill: gray;
    margin: 2em 0;
  }
`

const copyStyles = css`
  & {
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`

let interceptCopy;

document.addEventListener("copy", (e) => {
  if (interceptCopy) {
    e.clipboardData.setData("text/plain", interceptCopy);
    e.preventDefault();
  }
});

const copy = text => {
  interceptCopy = text
  document.execCommand("copy");
  interceptCopy = null;
}

class IconCopyButton {
  constructor() {
    this.onClick = () => {
      const name = this.props.children
      copy(`import ${name} from "@dependable/icons/${name}";`)
    }
  }

  render({ children }) {
    return html`
      <button onClick=${this.onClick} className=${copyStyles} title="Click to copy">
        ${children}
      </button>
    `
  }
}

class IconsPage {
  render() {
    return html`
      <${Title}>16px (fill)<//>
      <${SubTitle}>
        ${"These icon components is extracted from "}
        <${Anchor} href="https://garden.zendesk.com/design/icons">
          Zendesk Garden
        <//>
        ${" and turned into components."}
      <//>
      <${Line} />
      <p>
        Tip <${LightbulbStroke12Icon} /> click on the icon label to copy the
        import to that clipboard.
      </p>
      <div className=${columnStyles}>
         <${I123Fill16Icon} />
         <${IconCopyButton}>I123Fill16Icon<//>
         <${AdjustFill16Icon} />
         <${IconCopyButton}>AdjustFill16Icon<//>
         <${AlertErrorFill16Icon} />
         <${IconCopyButton}>AlertErrorFill16Icon<//>
         <${AlertWarningFill16Icon} />
         <${IconCopyButton}>AlertWarningFill16Icon<//>
         <${AlignCenterFill16Icon} />
         <${IconCopyButton}>AlignCenterFill16Icon<//>
         <${AlignJustifyFill16Icon} />
         <${IconCopyButton}>AlignJustifyFill16Icon<//>
         <${AlignLeftFill16Icon} />
         <${IconCopyButton}>AlignLeftFill16Icon<//>
         <${AlignRightFill16Icon} />
         <${IconCopyButton}>AlignRightFill16Icon<//>
         <${AltTextFill16Icon} />
         <${IconCopyButton}>AltTextFill16Icon<//>
         <${ArrowLeftFill16Icon} />
         <${IconCopyButton}>ArrowLeftFill16Icon<//>
         <${ArrowLeftSmFill16Icon} />
         <${IconCopyButton}>ArrowLeftSmFill16Icon<//>
         <${ArrowLeftUpFill16Icon} />
         <${IconCopyButton}>ArrowLeftUpFill16Icon<//>
         <${ArrowRetweetFill16Icon} />
         <${IconCopyButton}>ArrowRetweetFill16Icon<//>
         <${ArrowReverseFill16Icon} />
         <${IconCopyButton}>ArrowReverseFill16Icon<//>
         <${ArrowTrendingFill16Icon} />
         <${IconCopyButton}>ArrowTrendingFill16Icon<//>
         <${AsteriskFill16Icon} />
         <${IconCopyButton}>AsteriskFill16Icon<//>
         <${AtFill16Icon} />
         <${IconCopyButton}>AtFill16Icon<//>
         <${BarChartFill16Icon} />
         <${IconCopyButton}>BarChartFill16Icon<//>
         <${BasketballFill16Icon} />
         <${IconCopyButton}>BasketballFill16Icon<//>
         <${BoldFill16Icon} />
         <${IconCopyButton}>BoldFill16Icon<//>
         <${BookClosedFill16Icon} />
         <${IconCopyButton}>BookClosedFill16Icon<//>
         <${BookOpenFill16Icon} />
         <${IconCopyButton}>BookOpenFill16Icon<//>
         <${Box3dFill16Icon} />
         <${IconCopyButton}>Box3dFill16Icon<//>
         <${BuildingFill16Icon} />
         <${IconCopyButton}>BuildingFill16Icon<//>
         <${CalendarFill16Icon} />
         <${IconCopyButton}>CalendarFill16Icon<//>
         <${CameraFill16Icon} />
         <${IconCopyButton}>CameraFill16Icon<//>
         <${CarFill16Icon} />
         <${IconCopyButton}>CarFill16Icon<//>
         <${CenterFill16Icon} />
         <${IconCopyButton}>CenterFill16Icon<//>
         <${CheckBadgeFill16Icon} />
         <${IconCopyButton}>CheckBadgeFill16Icon<//>
         <${CheckBoxDoubleFill16Icon} />
         <${IconCopyButton}>CheckBoxDoubleFill16Icon<//>
         <${CheckBoxFill16Icon} />
         <${IconCopyButton}>CheckBoxFill16Icon<//>
         <${CheckCircleFill16Icon} />
         <${IconCopyButton}>CheckCircleFill16Icon<//>
         <${CheckDoubleFill16Icon} />
         <${IconCopyButton}>CheckDoubleFill16Icon<//>
         <${CheckLgFill16Icon} />
         <${IconCopyButton}>CheckLgFill16Icon<//>
         <${CheckSmFill16Icon} />
         <${IconCopyButton}>CheckSmFill16Icon<//>
         <${ChevronBoxFill16Icon} />
         <${IconCopyButton}>ChevronBoxFill16Icon<//>
         <${ChevronDoubleDownFill16Icon} />
         <${IconCopyButton}>ChevronDoubleDownFill16Icon<//>
         <${ChevronDoubleLeftFill16Icon} />
         <${IconCopyButton}>ChevronDoubleLeftFill16Icon<//>
         <${ChevronDoubleRightFill16Icon} />
         <${IconCopyButton}>ChevronDoubleRightFill16Icon<//>
         <${ChevronDoubleUpFill16Icon} />
         <${IconCopyButton}>ChevronDoubleUpFill16Icon<//>
         <${ChevronDownFill16Icon} />
         <${IconCopyButton}>ChevronDownFill16Icon<//>
         <${ChevronLeftFill16Icon} />
         <${IconCopyButton}>ChevronLeftFill16Icon<//>
         <${ChevronRightFill16Icon} />
         <${IconCopyButton}>ChevronRightFill16Icon<//>
         <${ChevronUpFill16Icon} />
         <${IconCopyButton}>ChevronUpFill16Icon<//>
         <${CircleFill16Icon} />
         <${IconCopyButton}>CircleFill16Icon<//>
         <${CircleFullFill16Icon} />
         <${IconCopyButton}>CircleFullFill16Icon<//>
         <${CircleLineFill16Icon} />
         <${IconCopyButton}>CircleLineFill16Icon<//>
         <${CircleSmFill16Icon} />
         <${IconCopyButton}>CircleSmFill16Icon<//>
         <${ClipboardBlankFill16Icon} />
         <${IconCopyButton}>ClipboardBlankFill16Icon<//>
         <${ClipboardCheckFill16Icon} />
         <${IconCopyButton}>ClipboardCheckFill16Icon<//>
         <${ClipboardListFill16Icon} />
         <${IconCopyButton}>ClipboardListFill16Icon<//>
         <${ClockCycleFill16Icon} />
         <${IconCopyButton}>ClockCycleFill16Icon<//>
         <${ClockFill16Icon} />
         <${IconCopyButton}>ClockFill16Icon<//>
         <${ClockInFill16Icon} />
         <${IconCopyButton}>ClockInFill16Icon<//>
         <${ClockOutFill16Icon} />
         <${IconCopyButton}>ClockOutFill16Icon<//>
         <${CopyFill16Icon} />
         <${IconCopyButton}>CopyFill16Icon<//>
         <${CreditCardFill16Icon} />
         <${IconCopyButton}>CreditCardFill16Icon<//>
         <${CssFill16Icon} />
         <${IconCopyButton}>CssFill16Icon<//>
         <${CursorArrowFill16Icon} />
         <${IconCopyButton}>CursorArrowFill16Icon<//>
         <${CutleryFill16Icon} />
         <${IconCopyButton}>CutleryFill16Icon<//>
         <${DashFill16Icon} />
         <${IconCopyButton}>DashFill16Icon<//>
         <${DatabaseFill16Icon} />
         <${IconCopyButton}>DatabaseFill16Icon<//>
         <${DecimalFill16Icon} />
         <${IconCopyButton}>DecimalFill16Icon<//>
         <${DirectionLtrFill16Icon} />
         <${IconCopyButton}>DirectionLtrFill16Icon<//>
         <${DirectionRtlFill16Icon} />
         <${IconCopyButton}>DirectionRtlFill16Icon<//>
         <${DocumentSearchFill16Icon} />
         <${IconCopyButton}>DocumentSearchFill16Icon<//>
         <${DownloadFill16Icon} />
         <${IconCopyButton}>DownloadFill16Icon<//>
         <${DuplicateFill16Icon} />
         <${IconCopyButton}>DuplicateFill16Icon<//>
         <${EditRedoFill16Icon} />
         <${IconCopyButton}>EditRedoFill16Icon<//>
         <${EditUndoFill16Icon} />
         <${IconCopyButton}>EditUndoFill16Icon<//>
         <${EmailFill16Icon} />
         <${IconCopyButton}>EmailFill16Icon<//>
         <${EraserFill16Icon} />
         <${IconCopyButton}>EraserFill16Icon<//>
         <${ExitFill16Icon} />
         <${IconCopyButton}>ExitFill16Icon<//>
         <${EyeFill16Icon} />
         <${IconCopyButton}>EyeFill16Icon<//>
         <${EyeHideFill16Icon} />
         <${IconCopyButton}>EyeHideFill16Icon<//>
         <${FacebookFill16Icon} />
         <${IconCopyButton}>FacebookFill16Icon<//>
         <${FileDocumentFill16Icon} />
         <${IconCopyButton}>FileDocumentFill16Icon<//>
         <${FileErrorFill16Icon} />
         <${IconCopyButton}>FileErrorFill16Icon<//>
         <${FileGenericFill16Icon} />
         <${IconCopyButton}>FileGenericFill16Icon<//>
         <${FileImageFill16Icon} />
         <${IconCopyButton}>FileImageFill16Icon<//>
         <${FilePdfFill16Icon} />
         <${IconCopyButton}>FilePdfFill16Icon<//>
         <${FilePresentationFill16Icon} />
         <${IconCopyButton}>FilePresentationFill16Icon<//>
         <${FileSpreadsheetFill16Icon} />
         <${IconCopyButton}>FileSpreadsheetFill16Icon<//>
         <${FileZipFill16Icon} />
         <${IconCopyButton}>FileZipFill16Icon<//>
         <${FilterFill16Icon} />
         <${IconCopyButton}>FilterFill16Icon<//>
         <${FlagFill16Icon} />
         <${IconCopyButton}>FlagFill16Icon<//>
         <${FolderClosedFill16Icon} />
         <${IconCopyButton}>FolderClosedFill16Icon<//>
         <${FolderOpenFill16Icon} />
         <${IconCopyButton}>FolderOpenFill16Icon<//>
         <${FullWidthFill16Icon} />
         <${IconCopyButton}>FullWidthFill16Icon<//>
         <${GearFill16Icon} />
         <${IconCopyButton}>GearFill16Icon<//>
         <${GithubFill16Icon} />
         <${IconCopyButton}>GithubFill16Icon<//>
         <${GlobeFill16Icon} />
         <${IconCopyButton}>GlobeFill16Icon<//>
         <${Grid2x2Fill16Icon} />
         <${IconCopyButton}>Grid2x2Fill16Icon<//>
         <${Grid3x3Fill16Icon} />
         <${IconCopyButton}>Grid3x3Fill16Icon<//>
         <${HeadingFill16Icon} />
         <${IconCopyButton}>HeadingFill16Icon<//>
         <${HeartFill16Icon} />
         <${IconCopyButton}>HeartFill16Icon<//>
         <${HistoryFill16Icon} />
         <${IconCopyButton}>HistoryFill16Icon<//>
         <${HomeFill16Icon} />
         <${IconCopyButton}>HomeFill16Icon<//>
         <${HorizontalRuleFill16Icon} />
         <${IconCopyButton}>HorizontalRuleFill16Icon<//>
         <${ImageFill16Icon} />
         <${IconCopyButton}>ImageFill16Icon<//>
         <${InboxFill16Icon} />
         <${IconCopyButton}>InboxFill16Icon<//>
         <${IndentDecreaseFill16Icon} />
         <${IconCopyButton}>IndentDecreaseFill16Icon<//>
         <${IndentIncreaseFill16Icon} />
         <${IconCopyButton}>IndentIncreaseFill16Icon<//>
         <${InfoFill16Icon} />
         <${IconCopyButton}>InfoFill16Icon<//>
         <${InterlockingRingsFill16Icon} />
         <${IconCopyButton}>InterlockingRingsFill16Icon<//>
         <${ItalicFill16Icon} />
         <${IconCopyButton}>ItalicFill16Icon<//>
         <${LeafFill16Icon} />
         <${IconCopyButton}>LeafFill16Icon<//>
         <${LifesaverFill16Icon} />
         <${IconCopyButton}>LifesaverFill16Icon<//>
         <${LightbulbFill16Icon} />
         <${IconCopyButton}>LightbulbFill16Icon<//>
         <${LightningBoltFill16Icon} />
         <${IconCopyButton}>LightningBoltFill16Icon<//>
         <${LineGraphFill16Icon} />
         <${IconCopyButton}>LineGraphFill16Icon<//>
         <${LineSocialFill16Icon} />
         <${IconCopyButton}>LineSocialFill16Icon<//>
         <${LinkFill16Icon} />
         <${IconCopyButton}>LinkFill16Icon<//>
         <${LinkRemoveFill16Icon} />
         <${IconCopyButton}>LinkRemoveFill16Icon<//>
         <${LinkedinFill16Icon} />
         <${IconCopyButton}>LinkedinFill16Icon<//>
         <${ListBulletFill16Icon} />
         <${IconCopyButton}>ListBulletFill16Icon<//>
         <${ListNumberFill16Icon} />
         <${IconCopyButton}>ListNumberFill16Icon<//>
         <${ListNumberRtlFill16Icon} />
         <${IconCopyButton}>ListNumberRtlFill16Icon<//>
         <${LocationFill16Icon} />
         <${IconCopyButton}>LocationFill16Icon<//>
         <${LockLockedFill16Icon} />
         <${IconCopyButton}>LockLockedFill16Icon<//>
         <${LockUnlockedFill16Icon} />
         <${IconCopyButton}>LockUnlockedFill16Icon<//>
         <${MarkupFill16Icon} />
         <${IconCopyButton}>MarkupFill16Icon<//>
         <${MaximizeFill16Icon} />
         <${IconCopyButton}>MaximizeFill16Icon<//>
         <${MegaphoneFill16Icon} />
         <${IconCopyButton}>MegaphoneFill16Icon<//>
         <${MenuFill16Icon} />
         <${IconCopyButton}>MenuFill16Icon<//>
         <${MessengerFill16Icon} />
         <${IconCopyButton}>MessengerFill16Icon<//>
         <${MicrophoneOffFill16Icon} />
         <${IconCopyButton}>MicrophoneOffFill16Icon<//>
         <${MicrophoneOnFill16Icon} />
         <${IconCopyButton}>MicrophoneOnFill16Icon<//>
         <${MinimizeFill16Icon} />
         <${IconCopyButton}>MinimizeFill16Icon<//>
         <${MobilePhoneFill16Icon} />
         <${IconCopyButton}>MobilePhoneFill16Icon<//>
         <${MonitorFill16Icon} />
         <${IconCopyButton}>MonitorFill16Icon<//>
         <${MultilineFill16Icon} />
         <${IconCopyButton}>MultilineFill16Icon<//>
         <${NewWindowFill16Icon} />
         <${IconCopyButton}>NewWindowFill16Icon<//>
         <${NotesFill16Icon} />
         <${IconCopyButton}>NotesFill16Icon<//>
         <${NotificationFill16Icon} />
         <${IconCopyButton}>NotificationFill16Icon<//>
         <${NumberFill16Icon} />
         <${IconCopyButton}>NumberFill16Icon<//>
         <${OriginalSizeFill16Icon} />
         <${IconCopyButton}>OriginalSizeFill16Icon<//>
         <${OverflowFill16Icon} />
         <${IconCopyButton}>OverflowFill16Icon<//>
         <${OverflowVerticalFill16Icon} />
         <${IconCopyButton}>OverflowVerticalFill16Icon<//>
         <${PaletteFill16Icon} />
         <${IconCopyButton}>PaletteFill16Icon<//>
         <${PanelsFill16Icon} />
         <${IconCopyButton}>PanelsFill16Icon<//>
         <${ParenthesesFill16Icon} />
         <${IconCopyButton}>ParenthesesFill16Icon<//>
         <${PauseFill16Icon} />
         <${IconCopyButton}>PauseFill16Icon<//>
         <${PencilFill16Icon} />
         <${IconCopyButton}>PencilFill16Icon<//>
         <${PhoneCallEndFill16Icon} />
         <${IconCopyButton}>PhoneCallEndFill16Icon<//>
         <${PhoneCallInFill16Icon} />
         <${IconCopyButton}>PhoneCallInFill16Icon<//>
         <${PhoneCallOutFill16Icon} />
         <${IconCopyButton}>PhoneCallOutFill16Icon<//>
         <${PhoneCallPauseFill16Icon} />
         <${IconCopyButton}>PhoneCallPauseFill16Icon<//>
         <${PhoneCallSpeakerFill16Icon} />
         <${IconCopyButton}>PhoneCallSpeakerFill16Icon<//>
         <${PhoneCallTransferFill16Icon} />
         <${IconCopyButton}>PhoneCallTransferFill16Icon<//>
         <${PhoneCallTransferOnlyFill16Icon} />
         <${IconCopyButton}>PhoneCallTransferOnlyFill16Icon<//>
         <${PhoneFill16Icon} />
         <${IconCopyButton}>PhoneFill16Icon<//>
         <${PinFill16Icon} />
         <${IconCopyButton}>PinFill16Icon<//>
         <${PinRemoveFill16Icon} />
         <${IconCopyButton}>PinRemoveFill16Icon<//>
         <${PlayCircleFill16Icon} />
         <${IconCopyButton}>PlayCircleFill16Icon<//>
         <${PlayFill16Icon} />
         <${IconCopyButton}>PlayFill16Icon<//>
         <${PlugFill16Icon} />
         <${IconCopyButton}>PlugFill16Icon<//>
         <${PlusCircleFill16Icon} />
         <${IconCopyButton}>PlusCircleFill16Icon<//>
         <${PlusFill16Icon} />
         <${IconCopyButton}>PlusFill16Icon<//>
         <${PuzzlePieceFill16Icon} />
         <${IconCopyButton}>PuzzlePieceFill16Icon<//>
         <${QuestionMarkFill16Icon} />
         <${IconCopyButton}>QuestionMarkFill16Icon<//>
         <${QuoteFill16Icon} />
         <${IconCopyButton}>QuoteFill16Icon<//>
         <${RearrangeFill16Icon} />
         <${IconCopyButton}>RearrangeFill16Icon<//>
         <${RecordFill16Icon} />
         <${IconCopyButton}>RecordFill16Icon<//>
         <${ReloadFill16Icon} />
         <${IconCopyButton}>ReloadFill16Icon<//>
         <${SandboxFill16Icon} />
         <${IconCopyButton}>SandboxFill16Icon<//>
         <${SearchFill16Icon} />
         <${IconCopyButton}>SearchFill16Icon<//>
         <${ShapesFill16Icon} />
         <${IconCopyButton}>ShapesFill16Icon<//>
         <${ShareFill16Icon} />
         <${IconCopyButton}>ShareFill16Icon<//>
         <${ShieldFill16Icon} />
         <${IconCopyButton}>ShieldFill16Icon<//>
         <${ShoppingCartFill16Icon} />
         <${IconCopyButton}>ShoppingCartFill16Icon<//>
         <${SignpostFill16Icon} />
         <${IconCopyButton}>SignpostFill16Icon<//>
         <${SlackFill16Icon} />
         <${IconCopyButton}>SlackFill16Icon<//>
         <${SmileSlightFill16Icon} />
         <${IconCopyButton}>SmileSlightFill16Icon<//>
         <${SmileyFill16Icon} />
         <${IconCopyButton}>SmileyFill16Icon<//>
         <${SortFill16Icon} />
         <${IconCopyButton}>SortFill16Icon<//>
         <${SpeechBubbleConversationFill16Icon} />
         <${IconCopyButton}>SpeechBubbleConversationFill16Icon<//>
         <${SpeechBubbleLightningBoltFill16Icon} />
         <${IconCopyButton}>SpeechBubbleLightningBoltFill16Icon<//>
         <${SpeechBubblePlainFill16Icon} />
         <${IconCopyButton}>SpeechBubblePlainFill16Icon<//>
         <${StarFill16Icon} />
         <${IconCopyButton}>StarFill16Icon<//>
         <${TableFill16Icon} />
         <${IconCopyButton}>TableFill16Icon<//>
         <${TagFill16Icon} />
         <${IconCopyButton}>TagFill16Icon<//>
         <${TerminalCliFill16Icon} />
         <${IconCopyButton}>TerminalCliFill16Icon<//>
         <${TerminalWindowFill16Icon} />
         <${IconCopyButton}>TerminalWindowFill16Icon<//>
         <${TextColorFill16Icon} />
         <${IconCopyButton}>TextColorFill16Icon<//>
         <${TextFill16Icon} />
         <${IconCopyButton}>TextFill16Icon<//>
         <${ThumbsDownFill16Icon} />
         <${IconCopyButton}>ThumbsDownFill16Icon<//>
         <${ThumbsUpFill16Icon} />
         <${IconCopyButton}>ThumbsUpFill16Icon<//>
         <${TranslationCreatedFill16Icon} />
         <${IconCopyButton}>TranslationCreatedFill16Icon<//>
         <${TranslationDeletedFill16Icon} />
         <${IconCopyButton}>TranslationDeletedFill16Icon<//>
         <${TranslationExistsFill16Icon} />
         <${IconCopyButton}>TranslationExistsFill16Icon<//>
         <${TranslationOutdatedFill16Icon} />
         <${IconCopyButton}>TranslationOutdatedFill16Icon<//>
         <${TranslationUpdatedFill16Icon} />
         <${IconCopyButton}>TranslationUpdatedFill16Icon<//>
         <${TrashFill16Icon} />
         <${IconCopyButton}>TrashFill16Icon<//>
         <${TwitterFill16Icon} />
         <${IconCopyButton}>TwitterFill16Icon<//>
         <${UnderlineFill16Icon} />
         <${IconCopyButton}>UnderlineFill16Icon<//>
         <${UploadFill16Icon} />
         <${IconCopyButton}>UploadFill16Icon<//>
         <${UserCircleFill16Icon} />
         <${IconCopyButton}>UserCircleFill16Icon<//>
         <${UserFollowFill16Icon} />
         <${IconCopyButton}>UserFollowFill16Icon<//>
         <${UserGroupFill16Icon} />
         <${IconCopyButton}>UserGroupFill16Icon<//>
         <${UserListFill16Icon} />
         <${IconCopyButton}>UserListFill16Icon<//>
         <${UserSoloFill16Icon} />
         <${IconCopyButton}>UserSoloFill16Icon<//>
         <${UserUnfollowFill16Icon} />
         <${IconCopyButton}>UserUnfollowFill16Icon<//>
         <${VoicemailFill16Icon} />
         <${IconCopyButton}>VoicemailFill16Icon<//>
         <${VolumeMutedFill16Icon} />
         <${IconCopyButton}>VolumeMutedFill16Icon<//>
         <${VolumeUnmutedFill16Icon} />
         <${IconCopyButton}>VolumeUnmutedFill16Icon<//>
         <${WechatFill16Icon} />
         <${IconCopyButton}>WechatFill16Icon<//>
         <${WhatsappFill16Icon} />
         <${IconCopyButton}>WhatsappFill16Icon<//>
         <${WrapLeftFill16Icon} />
         <${IconCopyButton}>WrapLeftFill16Icon<//>
         <${WrapRightFill16Icon} />
         <${IconCopyButton}>WrapRightFill16Icon<//>
         <${XCircleFill16Icon} />
         <${IconCopyButton}>XCircleFill16Icon<//>
         <${XFill16Icon} />
         <${IconCopyButton}>XFill16Icon<//>
         <${ZendeskFill16Icon} />
         <${IconCopyButton}>ZendeskFill16Icon<//>
      </div>
    `;
  }
}

export default IconsPage;
