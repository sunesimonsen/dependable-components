import { html } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import TipIcon from "@dependable/icons/LightbulbStroke12Icon";

import I123Fill12Icon from "@dependable/icons/I123Fill12Icon";
import AdjustFill12Icon from "@dependable/icons/AdjustFill12Icon";
import AlertErrorFill12Icon from "@dependable/icons/AlertErrorFill12Icon";
import AlertWarningFill12Icon from "@dependable/icons/AlertWarningFill12Icon";
import AlignCenterFill12Icon from "@dependable/icons/AlignCenterFill12Icon";
import AlignJustifyFill12Icon from "@dependable/icons/AlignJustifyFill12Icon";
import AlignLeftFill12Icon from "@dependable/icons/AlignLeftFill12Icon";
import AlignRightFill12Icon from "@dependable/icons/AlignRightFill12Icon";
import AltTextFill12Icon from "@dependable/icons/AltTextFill12Icon";
import ArrowLeftFill12Icon from "@dependable/icons/ArrowLeftFill12Icon";
import ArrowLeftSmFill12Icon from "@dependable/icons/ArrowLeftSmFill12Icon";
import ArrowLeftUpFill12Icon from "@dependable/icons/ArrowLeftUpFill12Icon";
import ArrowRetweetFill12Icon from "@dependable/icons/ArrowRetweetFill12Icon";
import ArrowReverseFill12Icon from "@dependable/icons/ArrowReverseFill12Icon";
import ArrowTrendingFill12Icon from "@dependable/icons/ArrowTrendingFill12Icon";
import AsteriskFill12Icon from "@dependable/icons/AsteriskFill12Icon";
import AtFill12Icon from "@dependable/icons/AtFill12Icon";
import BarChartFill12Icon from "@dependable/icons/BarChartFill12Icon";
import BasketballFill12Icon from "@dependable/icons/BasketballFill12Icon";
import BoldFill12Icon from "@dependable/icons/BoldFill12Icon";
import BookClosedFill12Icon from "@dependable/icons/BookClosedFill12Icon";
import BookOpenFill12Icon from "@dependable/icons/BookOpenFill12Icon";
import Box3dFill12Icon from "@dependable/icons/Box3dFill12Icon";
import BuildingFill12Icon from "@dependable/icons/BuildingFill12Icon";
import CalendarFill12Icon from "@dependable/icons/CalendarFill12Icon";
import CameraFill12Icon from "@dependable/icons/CameraFill12Icon";
import CarFill12Icon from "@dependable/icons/CarFill12Icon";
import CenterFill12Icon from "@dependable/icons/CenterFill12Icon";
import CheckBadgeFill12Icon from "@dependable/icons/CheckBadgeFill12Icon";
import CheckBoxDoubleFill12Icon from "@dependable/icons/CheckBoxDoubleFill12Icon";
import CheckBoxFill12Icon from "@dependable/icons/CheckBoxFill12Icon";
import CheckCircleFill12Icon from "@dependable/icons/CheckCircleFill12Icon";
import CheckDoubleFill12Icon from "@dependable/icons/CheckDoubleFill12Icon";
import CheckLgFill12Icon from "@dependable/icons/CheckLgFill12Icon";
import CheckSmFill12Icon from "@dependable/icons/CheckSmFill12Icon";
import ChevronBoxFill12Icon from "@dependable/icons/ChevronBoxFill12Icon";
import ChevronDoubleDownFill12Icon from "@dependable/icons/ChevronDoubleDownFill12Icon";
import ChevronDoubleLeftFill12Icon from "@dependable/icons/ChevronDoubleLeftFill12Icon";
import ChevronDoubleRightFill12Icon from "@dependable/icons/ChevronDoubleRightFill12Icon";
import ChevronDoubleUpFill12Icon from "@dependable/icons/ChevronDoubleUpFill12Icon";
import ChevronDownFill12Icon from "@dependable/icons/ChevronDownFill12Icon";
import ChevronLeftFill12Icon from "@dependable/icons/ChevronLeftFill12Icon";
import ChevronRightFill12Icon from "@dependable/icons/ChevronRightFill12Icon";
import ChevronUpFill12Icon from "@dependable/icons/ChevronUpFill12Icon";
import CircleFill12Icon from "@dependable/icons/CircleFill12Icon";
import CircleFullFill12Icon from "@dependable/icons/CircleFullFill12Icon";
import CircleLineFill12Icon from "@dependable/icons/CircleLineFill12Icon";
import CircleSmFill12Icon from "@dependable/icons/CircleSmFill12Icon";
import ClipboardBlankFill12Icon from "@dependable/icons/ClipboardBlankFill12Icon";
import ClipboardCheckFill12Icon from "@dependable/icons/ClipboardCheckFill12Icon";
import ClipboardListFill12Icon from "@dependable/icons/ClipboardListFill12Icon";
import ClockCycleFill12Icon from "@dependable/icons/ClockCycleFill12Icon";
import ClockFill12Icon from "@dependable/icons/ClockFill12Icon";
import ClockInFill12Icon from "@dependable/icons/ClockInFill12Icon";
import ClockOutFill12Icon from "@dependable/icons/ClockOutFill12Icon";
import CopyFill12Icon from "@dependable/icons/CopyFill12Icon";
import CreditCardFill12Icon from "@dependable/icons/CreditCardFill12Icon";
import CssFill12Icon from "@dependable/icons/CssFill12Icon";
import CursorArrowFill12Icon from "@dependable/icons/CursorArrowFill12Icon";
import CutleryFill12Icon from "@dependable/icons/CutleryFill12Icon";
import DashFill12Icon from "@dependable/icons/DashFill12Icon";
import DatabaseFill12Icon from "@dependable/icons/DatabaseFill12Icon";
import DecimalFill12Icon from "@dependable/icons/DecimalFill12Icon";
import DirectionLtrFill12Icon from "@dependable/icons/DirectionLtrFill12Icon";
import DirectionRtlFill12Icon from "@dependable/icons/DirectionRtlFill12Icon";
import DocumentSearchFill12Icon from "@dependable/icons/DocumentSearchFill12Icon";
import DownloadFill12Icon from "@dependable/icons/DownloadFill12Icon";
import DuplicateFill12Icon from "@dependable/icons/DuplicateFill12Icon";
import EditRedoFill12Icon from "@dependable/icons/EditRedoFill12Icon";
import EditUndoFill12Icon from "@dependable/icons/EditUndoFill12Icon";
import EmailFill12Icon from "@dependable/icons/EmailFill12Icon";
import EraserFill12Icon from "@dependable/icons/EraserFill12Icon";
import ExitFill12Icon from "@dependable/icons/ExitFill12Icon";
import EyeFill12Icon from "@dependable/icons/EyeFill12Icon";
import EyeHideFill12Icon from "@dependable/icons/EyeHideFill12Icon";
import FacebookFill12Icon from "@dependable/icons/FacebookFill12Icon";
import FileDocumentFill12Icon from "@dependable/icons/FileDocumentFill12Icon";
import FileErrorFill12Icon from "@dependable/icons/FileErrorFill12Icon";
import FileGenericFill12Icon from "@dependable/icons/FileGenericFill12Icon";
import FileImageFill12Icon from "@dependable/icons/FileImageFill12Icon";
import FilePdfFill12Icon from "@dependable/icons/FilePdfFill12Icon";
import FilePresentationFill12Icon from "@dependable/icons/FilePresentationFill12Icon";
import FileSpreadsheetFill12Icon from "@dependable/icons/FileSpreadsheetFill12Icon";
import FileZipFill12Icon from "@dependable/icons/FileZipFill12Icon";
import FilterFill12Icon from "@dependable/icons/FilterFill12Icon";
import FlagFill12Icon from "@dependable/icons/FlagFill12Icon";
import FolderClosedFill12Icon from "@dependable/icons/FolderClosedFill12Icon";
import FolderOpenFill12Icon from "@dependable/icons/FolderOpenFill12Icon";
import FullWidthFill12Icon from "@dependable/icons/FullWidthFill12Icon";
import GearFill12Icon from "@dependable/icons/GearFill12Icon";
import GithubFill12Icon from "@dependable/icons/GithubFill12Icon";
import GlobeFill12Icon from "@dependable/icons/GlobeFill12Icon";
import Grid2x2Fill12Icon from "@dependable/icons/Grid2x2Fill12Icon";
import Grid3x3Fill12Icon from "@dependable/icons/Grid3x3Fill12Icon";
import HeadingFill12Icon from "@dependable/icons/HeadingFill12Icon";
import HeartFill12Icon from "@dependable/icons/HeartFill12Icon";
import HistoryFill12Icon from "@dependable/icons/HistoryFill12Icon";
import HomeFill12Icon from "@dependable/icons/HomeFill12Icon";
import HorizontalRuleFill12Icon from "@dependable/icons/HorizontalRuleFill12Icon";
import ImageFill12Icon from "@dependable/icons/ImageFill12Icon";
import InboxFill12Icon from "@dependable/icons/InboxFill12Icon";
import IndentDecreaseFill12Icon from "@dependable/icons/IndentDecreaseFill12Icon";
import IndentIncreaseFill12Icon from "@dependable/icons/IndentIncreaseFill12Icon";
import InfoFill12Icon from "@dependable/icons/InfoFill12Icon";
import InterlockingRingsFill12Icon from "@dependable/icons/InterlockingRingsFill12Icon";
import ItalicFill12Icon from "@dependable/icons/ItalicFill12Icon";
import LeafFill12Icon from "@dependable/icons/LeafFill12Icon";
import LifesaverFill12Icon from "@dependable/icons/LifesaverFill12Icon";
import LightbulbFill12Icon from "@dependable/icons/LightbulbFill12Icon";
import LightningBoltFill12Icon from "@dependable/icons/LightningBoltFill12Icon";
import LineGraphFill12Icon from "@dependable/icons/LineGraphFill12Icon";
import LineSocialFill12Icon from "@dependable/icons/LineSocialFill12Icon";
import LinkFill12Icon from "@dependable/icons/LinkFill12Icon";
import LinkRemoveFill12Icon from "@dependable/icons/LinkRemoveFill12Icon";
import LinkedinFill12Icon from "@dependable/icons/LinkedinFill12Icon";
import ListBulletFill12Icon from "@dependable/icons/ListBulletFill12Icon";
import ListNumberFill12Icon from "@dependable/icons/ListNumberFill12Icon";
import ListNumberRtlFill12Icon from "@dependable/icons/ListNumberRtlFill12Icon";
import LocationFill12Icon from "@dependable/icons/LocationFill12Icon";
import LockLockedFill12Icon from "@dependable/icons/LockLockedFill12Icon";
import LockUnlockedFill12Icon from "@dependable/icons/LockUnlockedFill12Icon";
import MarkupFill12Icon from "@dependable/icons/MarkupFill12Icon";
import MaximizeFill12Icon from "@dependable/icons/MaximizeFill12Icon";
import MegaphoneFill12Icon from "@dependable/icons/MegaphoneFill12Icon";
import MenuFill12Icon from "@dependable/icons/MenuFill12Icon";
import MessengerFill12Icon from "@dependable/icons/MessengerFill12Icon";
import MicrophoneOffFill12Icon from "@dependable/icons/MicrophoneOffFill12Icon";
import MicrophoneOnFill12Icon from "@dependable/icons/MicrophoneOnFill12Icon";
import MinimizeFill12Icon from "@dependable/icons/MinimizeFill12Icon";
import MobilePhoneFill12Icon from "@dependable/icons/MobilePhoneFill12Icon";
import MonitorFill12Icon from "@dependable/icons/MonitorFill12Icon";
import MultilineFill12Icon from "@dependable/icons/MultilineFill12Icon";
import NewWindowFill12Icon from "@dependable/icons/NewWindowFill12Icon";
import NotesFill12Icon from "@dependable/icons/NotesFill12Icon";
import NotificationFill12Icon from "@dependable/icons/NotificationFill12Icon";
import NumberFill12Icon from "@dependable/icons/NumberFill12Icon";
import OriginalSizeFill12Icon from "@dependable/icons/OriginalSizeFill12Icon";
import OverflowFill12Icon from "@dependable/icons/OverflowFill12Icon";
import OverflowVerticalFill12Icon from "@dependable/icons/OverflowVerticalFill12Icon";
import PaletteFill12Icon from "@dependable/icons/PaletteFill12Icon";
import PanelsFill12Icon from "@dependable/icons/PanelsFill12Icon";
import ParenthesesFill12Icon from "@dependable/icons/ParenthesesFill12Icon";
import PauseFill12Icon from "@dependable/icons/PauseFill12Icon";
import PencilFill12Icon from "@dependable/icons/PencilFill12Icon";
import PhoneCallEndFill12Icon from "@dependable/icons/PhoneCallEndFill12Icon";
import PhoneCallInFill12Icon from "@dependable/icons/PhoneCallInFill12Icon";
import PhoneCallOutFill12Icon from "@dependable/icons/PhoneCallOutFill12Icon";
import PhoneCallPauseFill12Icon from "@dependable/icons/PhoneCallPauseFill12Icon";
import PhoneCallSpeakerFill12Icon from "@dependable/icons/PhoneCallSpeakerFill12Icon";
import PhoneCallTransferFill12Icon from "@dependable/icons/PhoneCallTransferFill12Icon";
import PhoneCallTransferOnlyFill12Icon from "@dependable/icons/PhoneCallTransferOnlyFill12Icon";
import PhoneFill12Icon from "@dependable/icons/PhoneFill12Icon";
import PinFill12Icon from "@dependable/icons/PinFill12Icon";
import PinRemoveFill12Icon from "@dependable/icons/PinRemoveFill12Icon";
import PlayCircleFill12Icon from "@dependable/icons/PlayCircleFill12Icon";
import PlayFill12Icon from "@dependable/icons/PlayFill12Icon";
import PlugFill12Icon from "@dependable/icons/PlugFill12Icon";
import PlusCircleFill12Icon from "@dependable/icons/PlusCircleFill12Icon";
import PlusFill12Icon from "@dependable/icons/PlusFill12Icon";
import PuzzlePieceFill12Icon from "@dependable/icons/PuzzlePieceFill12Icon";
import QuestionMarkFill12Icon from "@dependable/icons/QuestionMarkFill12Icon";
import QuoteFill12Icon from "@dependable/icons/QuoteFill12Icon";
import RearrangeFill12Icon from "@dependable/icons/RearrangeFill12Icon";
import RecordFill12Icon from "@dependable/icons/RecordFill12Icon";
import ReloadFill12Icon from "@dependable/icons/ReloadFill12Icon";
import SandboxFill12Icon from "@dependable/icons/SandboxFill12Icon";
import SearchFill12Icon from "@dependable/icons/SearchFill12Icon";
import ShapesFill12Icon from "@dependable/icons/ShapesFill12Icon";
import ShareFill12Icon from "@dependable/icons/ShareFill12Icon";
import ShieldFill12Icon from "@dependable/icons/ShieldFill12Icon";
import ShoppingCartFill12Icon from "@dependable/icons/ShoppingCartFill12Icon";
import SignpostFill12Icon from "@dependable/icons/SignpostFill12Icon";
import SlackFill12Icon from "@dependable/icons/SlackFill12Icon";
import SmileSlightFill12Icon from "@dependable/icons/SmileSlightFill12Icon";
import SmileyFill12Icon from "@dependable/icons/SmileyFill12Icon";
import SortFill12Icon from "@dependable/icons/SortFill12Icon";
import SpeechBubbleConversationFill12Icon from "@dependable/icons/SpeechBubbleConversationFill12Icon";
import SpeechBubbleLightningBoltFill12Icon from "@dependable/icons/SpeechBubbleLightningBoltFill12Icon";
import SpeechBubblePlainFill12Icon from "@dependable/icons/SpeechBubblePlainFill12Icon";
import StarFill12Icon from "@dependable/icons/StarFill12Icon";
import TableFill12Icon from "@dependable/icons/TableFill12Icon";
import TagFill12Icon from "@dependable/icons/TagFill12Icon";
import TerminalCliFill12Icon from "@dependable/icons/TerminalCliFill12Icon";
import TerminalWindowFill12Icon from "@dependable/icons/TerminalWindowFill12Icon";
import TextColorFill12Icon from "@dependable/icons/TextColorFill12Icon";
import TextFill12Icon from "@dependable/icons/TextFill12Icon";
import ThumbsDownFill12Icon from "@dependable/icons/ThumbsDownFill12Icon";
import ThumbsUpFill12Icon from "@dependable/icons/ThumbsUpFill12Icon";
import TranslationCreatedFill12Icon from "@dependable/icons/TranslationCreatedFill12Icon";
import TranslationDeletedFill12Icon from "@dependable/icons/TranslationDeletedFill12Icon";
import TranslationExistsFill12Icon from "@dependable/icons/TranslationExistsFill12Icon";
import TranslationOutdatedFill12Icon from "@dependable/icons/TranslationOutdatedFill12Icon";
import TranslationUpdatedFill12Icon from "@dependable/icons/TranslationUpdatedFill12Icon";
import TrashFill12Icon from "@dependable/icons/TrashFill12Icon";
import TwitterFill12Icon from "@dependable/icons/TwitterFill12Icon";
import UnderlineFill12Icon from "@dependable/icons/UnderlineFill12Icon";
import UploadFill12Icon from "@dependable/icons/UploadFill12Icon";
import UserCircleFill12Icon from "@dependable/icons/UserCircleFill12Icon";
import UserFollowFill12Icon from "@dependable/icons/UserFollowFill12Icon";
import UserGroupFill12Icon from "@dependable/icons/UserGroupFill12Icon";
import UserListFill12Icon from "@dependable/icons/UserListFill12Icon";
import UserSoloFill12Icon from "@dependable/icons/UserSoloFill12Icon";
import UserUnfollowFill12Icon from "@dependable/icons/UserUnfollowFill12Icon";
import VoicemailFill12Icon from "@dependable/icons/VoicemailFill12Icon";
import VolumeMutedFill12Icon from "@dependable/icons/VolumeMutedFill12Icon";
import VolumeUnmutedFill12Icon from "@dependable/icons/VolumeUnmutedFill12Icon";
import WechatFill12Icon from "@dependable/icons/WechatFill12Icon";
import WhatsappFill12Icon from "@dependable/icons/WhatsappFill12Icon";
import WrapLeftFill12Icon from "@dependable/icons/WrapLeftFill12Icon";
import WrapRightFill12Icon from "@dependable/icons/WrapRightFill12Icon";
import XCircleFill12Icon from "@dependable/icons/XCircleFill12Icon";
import XFill12Icon from "@dependable/icons/XFill12Icon";
import ZendeskFill12Icon from "@dependable/icons/ZendeskFill12Icon";

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
      <${Title}>12px (fill)<//>
      <${SubTitle}>
        ${"These icon components is extracted from "}
        <${Anchor} href="https://garden.zendesk.com/design/icons">
          Zendesk Garden
        <//>
        ${" and turned into components."}
      <//>
      <${Line} />
      <p>
        Tip <${TipIcon} /> click on the icon label to copy the
        import to that clipboard.
      </p>
      <div className=${columnStyles}>
         <${I123Fill12Icon} />
         <${IconCopyButton}>I123Fill12Icon<//>
         <${AdjustFill12Icon} />
         <${IconCopyButton}>AdjustFill12Icon<//>
         <${AlertErrorFill12Icon} />
         <${IconCopyButton}>AlertErrorFill12Icon<//>
         <${AlertWarningFill12Icon} />
         <${IconCopyButton}>AlertWarningFill12Icon<//>
         <${AlignCenterFill12Icon} />
         <${IconCopyButton}>AlignCenterFill12Icon<//>
         <${AlignJustifyFill12Icon} />
         <${IconCopyButton}>AlignJustifyFill12Icon<//>
         <${AlignLeftFill12Icon} />
         <${IconCopyButton}>AlignLeftFill12Icon<//>
         <${AlignRightFill12Icon} />
         <${IconCopyButton}>AlignRightFill12Icon<//>
         <${AltTextFill12Icon} />
         <${IconCopyButton}>AltTextFill12Icon<//>
         <${ArrowLeftFill12Icon} />
         <${IconCopyButton}>ArrowLeftFill12Icon<//>
         <${ArrowLeftSmFill12Icon} />
         <${IconCopyButton}>ArrowLeftSmFill12Icon<//>
         <${ArrowLeftUpFill12Icon} />
         <${IconCopyButton}>ArrowLeftUpFill12Icon<//>
         <${ArrowRetweetFill12Icon} />
         <${IconCopyButton}>ArrowRetweetFill12Icon<//>
         <${ArrowReverseFill12Icon} />
         <${IconCopyButton}>ArrowReverseFill12Icon<//>
         <${ArrowTrendingFill12Icon} />
         <${IconCopyButton}>ArrowTrendingFill12Icon<//>
         <${AsteriskFill12Icon} />
         <${IconCopyButton}>AsteriskFill12Icon<//>
         <${AtFill12Icon} />
         <${IconCopyButton}>AtFill12Icon<//>
         <${BarChartFill12Icon} />
         <${IconCopyButton}>BarChartFill12Icon<//>
         <${BasketballFill12Icon} />
         <${IconCopyButton}>BasketballFill12Icon<//>
         <${BoldFill12Icon} />
         <${IconCopyButton}>BoldFill12Icon<//>
         <${BookClosedFill12Icon} />
         <${IconCopyButton}>BookClosedFill12Icon<//>
         <${BookOpenFill12Icon} />
         <${IconCopyButton}>BookOpenFill12Icon<//>
         <${Box3dFill12Icon} />
         <${IconCopyButton}>Box3dFill12Icon<//>
         <${BuildingFill12Icon} />
         <${IconCopyButton}>BuildingFill12Icon<//>
         <${CalendarFill12Icon} />
         <${IconCopyButton}>CalendarFill12Icon<//>
         <${CameraFill12Icon} />
         <${IconCopyButton}>CameraFill12Icon<//>
         <${CarFill12Icon} />
         <${IconCopyButton}>CarFill12Icon<//>
         <${CenterFill12Icon} />
         <${IconCopyButton}>CenterFill12Icon<//>
         <${CheckBadgeFill12Icon} />
         <${IconCopyButton}>CheckBadgeFill12Icon<//>
         <${CheckBoxDoubleFill12Icon} />
         <${IconCopyButton}>CheckBoxDoubleFill12Icon<//>
         <${CheckBoxFill12Icon} />
         <${IconCopyButton}>CheckBoxFill12Icon<//>
         <${CheckCircleFill12Icon} />
         <${IconCopyButton}>CheckCircleFill12Icon<//>
         <${CheckDoubleFill12Icon} />
         <${IconCopyButton}>CheckDoubleFill12Icon<//>
         <${CheckLgFill12Icon} />
         <${IconCopyButton}>CheckLgFill12Icon<//>
         <${CheckSmFill12Icon} />
         <${IconCopyButton}>CheckSmFill12Icon<//>
         <${ChevronBoxFill12Icon} />
         <${IconCopyButton}>ChevronBoxFill12Icon<//>
         <${ChevronDoubleDownFill12Icon} />
         <${IconCopyButton}>ChevronDoubleDownFill12Icon<//>
         <${ChevronDoubleLeftFill12Icon} />
         <${IconCopyButton}>ChevronDoubleLeftFill12Icon<//>
         <${ChevronDoubleRightFill12Icon} />
         <${IconCopyButton}>ChevronDoubleRightFill12Icon<//>
         <${ChevronDoubleUpFill12Icon} />
         <${IconCopyButton}>ChevronDoubleUpFill12Icon<//>
         <${ChevronDownFill12Icon} />
         <${IconCopyButton}>ChevronDownFill12Icon<//>
         <${ChevronLeftFill12Icon} />
         <${IconCopyButton}>ChevronLeftFill12Icon<//>
         <${ChevronRightFill12Icon} />
         <${IconCopyButton}>ChevronRightFill12Icon<//>
         <${ChevronUpFill12Icon} />
         <${IconCopyButton}>ChevronUpFill12Icon<//>
         <${CircleFill12Icon} />
         <${IconCopyButton}>CircleFill12Icon<//>
         <${CircleFullFill12Icon} />
         <${IconCopyButton}>CircleFullFill12Icon<//>
         <${CircleLineFill12Icon} />
         <${IconCopyButton}>CircleLineFill12Icon<//>
         <${CircleSmFill12Icon} />
         <${IconCopyButton}>CircleSmFill12Icon<//>
         <${ClipboardBlankFill12Icon} />
         <${IconCopyButton}>ClipboardBlankFill12Icon<//>
         <${ClipboardCheckFill12Icon} />
         <${IconCopyButton}>ClipboardCheckFill12Icon<//>
         <${ClipboardListFill12Icon} />
         <${IconCopyButton}>ClipboardListFill12Icon<//>
         <${ClockCycleFill12Icon} />
         <${IconCopyButton}>ClockCycleFill12Icon<//>
         <${ClockFill12Icon} />
         <${IconCopyButton}>ClockFill12Icon<//>
         <${ClockInFill12Icon} />
         <${IconCopyButton}>ClockInFill12Icon<//>
         <${ClockOutFill12Icon} />
         <${IconCopyButton}>ClockOutFill12Icon<//>
         <${CopyFill12Icon} />
         <${IconCopyButton}>CopyFill12Icon<//>
         <${CreditCardFill12Icon} />
         <${IconCopyButton}>CreditCardFill12Icon<//>
         <${CssFill12Icon} />
         <${IconCopyButton}>CssFill12Icon<//>
         <${CursorArrowFill12Icon} />
         <${IconCopyButton}>CursorArrowFill12Icon<//>
         <${CutleryFill12Icon} />
         <${IconCopyButton}>CutleryFill12Icon<//>
         <${DashFill12Icon} />
         <${IconCopyButton}>DashFill12Icon<//>
         <${DatabaseFill12Icon} />
         <${IconCopyButton}>DatabaseFill12Icon<//>
         <${DecimalFill12Icon} />
         <${IconCopyButton}>DecimalFill12Icon<//>
         <${DirectionLtrFill12Icon} />
         <${IconCopyButton}>DirectionLtrFill12Icon<//>
         <${DirectionRtlFill12Icon} />
         <${IconCopyButton}>DirectionRtlFill12Icon<//>
         <${DocumentSearchFill12Icon} />
         <${IconCopyButton}>DocumentSearchFill12Icon<//>
         <${DownloadFill12Icon} />
         <${IconCopyButton}>DownloadFill12Icon<//>
         <${DuplicateFill12Icon} />
         <${IconCopyButton}>DuplicateFill12Icon<//>
         <${EditRedoFill12Icon} />
         <${IconCopyButton}>EditRedoFill12Icon<//>
         <${EditUndoFill12Icon} />
         <${IconCopyButton}>EditUndoFill12Icon<//>
         <${EmailFill12Icon} />
         <${IconCopyButton}>EmailFill12Icon<//>
         <${EraserFill12Icon} />
         <${IconCopyButton}>EraserFill12Icon<//>
         <${ExitFill12Icon} />
         <${IconCopyButton}>ExitFill12Icon<//>
         <${EyeFill12Icon} />
         <${IconCopyButton}>EyeFill12Icon<//>
         <${EyeHideFill12Icon} />
         <${IconCopyButton}>EyeHideFill12Icon<//>
         <${FacebookFill12Icon} />
         <${IconCopyButton}>FacebookFill12Icon<//>
         <${FileDocumentFill12Icon} />
         <${IconCopyButton}>FileDocumentFill12Icon<//>
         <${FileErrorFill12Icon} />
         <${IconCopyButton}>FileErrorFill12Icon<//>
         <${FileGenericFill12Icon} />
         <${IconCopyButton}>FileGenericFill12Icon<//>
         <${FileImageFill12Icon} />
         <${IconCopyButton}>FileImageFill12Icon<//>
         <${FilePdfFill12Icon} />
         <${IconCopyButton}>FilePdfFill12Icon<//>
         <${FilePresentationFill12Icon} />
         <${IconCopyButton}>FilePresentationFill12Icon<//>
         <${FileSpreadsheetFill12Icon} />
         <${IconCopyButton}>FileSpreadsheetFill12Icon<//>
         <${FileZipFill12Icon} />
         <${IconCopyButton}>FileZipFill12Icon<//>
         <${FilterFill12Icon} />
         <${IconCopyButton}>FilterFill12Icon<//>
         <${FlagFill12Icon} />
         <${IconCopyButton}>FlagFill12Icon<//>
         <${FolderClosedFill12Icon} />
         <${IconCopyButton}>FolderClosedFill12Icon<//>
         <${FolderOpenFill12Icon} />
         <${IconCopyButton}>FolderOpenFill12Icon<//>
         <${FullWidthFill12Icon} />
         <${IconCopyButton}>FullWidthFill12Icon<//>
         <${GearFill12Icon} />
         <${IconCopyButton}>GearFill12Icon<//>
         <${GithubFill12Icon} />
         <${IconCopyButton}>GithubFill12Icon<//>
         <${GlobeFill12Icon} />
         <${IconCopyButton}>GlobeFill12Icon<//>
         <${Grid2x2Fill12Icon} />
         <${IconCopyButton}>Grid2x2Fill12Icon<//>
         <${Grid3x3Fill12Icon} />
         <${IconCopyButton}>Grid3x3Fill12Icon<//>
         <${HeadingFill12Icon} />
         <${IconCopyButton}>HeadingFill12Icon<//>
         <${HeartFill12Icon} />
         <${IconCopyButton}>HeartFill12Icon<//>
         <${HistoryFill12Icon} />
         <${IconCopyButton}>HistoryFill12Icon<//>
         <${HomeFill12Icon} />
         <${IconCopyButton}>HomeFill12Icon<//>
         <${HorizontalRuleFill12Icon} />
         <${IconCopyButton}>HorizontalRuleFill12Icon<//>
         <${ImageFill12Icon} />
         <${IconCopyButton}>ImageFill12Icon<//>
         <${InboxFill12Icon} />
         <${IconCopyButton}>InboxFill12Icon<//>
         <${IndentDecreaseFill12Icon} />
         <${IconCopyButton}>IndentDecreaseFill12Icon<//>
         <${IndentIncreaseFill12Icon} />
         <${IconCopyButton}>IndentIncreaseFill12Icon<//>
         <${InfoFill12Icon} />
         <${IconCopyButton}>InfoFill12Icon<//>
         <${InterlockingRingsFill12Icon} />
         <${IconCopyButton}>InterlockingRingsFill12Icon<//>
         <${ItalicFill12Icon} />
         <${IconCopyButton}>ItalicFill12Icon<//>
         <${LeafFill12Icon} />
         <${IconCopyButton}>LeafFill12Icon<//>
         <${LifesaverFill12Icon} />
         <${IconCopyButton}>LifesaverFill12Icon<//>
         <${LightbulbFill12Icon} />
         <${IconCopyButton}>LightbulbFill12Icon<//>
         <${LightningBoltFill12Icon} />
         <${IconCopyButton}>LightningBoltFill12Icon<//>
         <${LineGraphFill12Icon} />
         <${IconCopyButton}>LineGraphFill12Icon<//>
         <${LineSocialFill12Icon} />
         <${IconCopyButton}>LineSocialFill12Icon<//>
         <${LinkFill12Icon} />
         <${IconCopyButton}>LinkFill12Icon<//>
         <${LinkRemoveFill12Icon} />
         <${IconCopyButton}>LinkRemoveFill12Icon<//>
         <${LinkedinFill12Icon} />
         <${IconCopyButton}>LinkedinFill12Icon<//>
         <${ListBulletFill12Icon} />
         <${IconCopyButton}>ListBulletFill12Icon<//>
         <${ListNumberFill12Icon} />
         <${IconCopyButton}>ListNumberFill12Icon<//>
         <${ListNumberRtlFill12Icon} />
         <${IconCopyButton}>ListNumberRtlFill12Icon<//>
         <${LocationFill12Icon} />
         <${IconCopyButton}>LocationFill12Icon<//>
         <${LockLockedFill12Icon} />
         <${IconCopyButton}>LockLockedFill12Icon<//>
         <${LockUnlockedFill12Icon} />
         <${IconCopyButton}>LockUnlockedFill12Icon<//>
         <${MarkupFill12Icon} />
         <${IconCopyButton}>MarkupFill12Icon<//>
         <${MaximizeFill12Icon} />
         <${IconCopyButton}>MaximizeFill12Icon<//>
         <${MegaphoneFill12Icon} />
         <${IconCopyButton}>MegaphoneFill12Icon<//>
         <${MenuFill12Icon} />
         <${IconCopyButton}>MenuFill12Icon<//>
         <${MessengerFill12Icon} />
         <${IconCopyButton}>MessengerFill12Icon<//>
         <${MicrophoneOffFill12Icon} />
         <${IconCopyButton}>MicrophoneOffFill12Icon<//>
         <${MicrophoneOnFill12Icon} />
         <${IconCopyButton}>MicrophoneOnFill12Icon<//>
         <${MinimizeFill12Icon} />
         <${IconCopyButton}>MinimizeFill12Icon<//>
         <${MobilePhoneFill12Icon} />
         <${IconCopyButton}>MobilePhoneFill12Icon<//>
         <${MonitorFill12Icon} />
         <${IconCopyButton}>MonitorFill12Icon<//>
         <${MultilineFill12Icon} />
         <${IconCopyButton}>MultilineFill12Icon<//>
         <${NewWindowFill12Icon} />
         <${IconCopyButton}>NewWindowFill12Icon<//>
         <${NotesFill12Icon} />
         <${IconCopyButton}>NotesFill12Icon<//>
         <${NotificationFill12Icon} />
         <${IconCopyButton}>NotificationFill12Icon<//>
         <${NumberFill12Icon} />
         <${IconCopyButton}>NumberFill12Icon<//>
         <${OriginalSizeFill12Icon} />
         <${IconCopyButton}>OriginalSizeFill12Icon<//>
         <${OverflowFill12Icon} />
         <${IconCopyButton}>OverflowFill12Icon<//>
         <${OverflowVerticalFill12Icon} />
         <${IconCopyButton}>OverflowVerticalFill12Icon<//>
         <${PaletteFill12Icon} />
         <${IconCopyButton}>PaletteFill12Icon<//>
         <${PanelsFill12Icon} />
         <${IconCopyButton}>PanelsFill12Icon<//>
         <${ParenthesesFill12Icon} />
         <${IconCopyButton}>ParenthesesFill12Icon<//>
         <${PauseFill12Icon} />
         <${IconCopyButton}>PauseFill12Icon<//>
         <${PencilFill12Icon} />
         <${IconCopyButton}>PencilFill12Icon<//>
         <${PhoneCallEndFill12Icon} />
         <${IconCopyButton}>PhoneCallEndFill12Icon<//>
         <${PhoneCallInFill12Icon} />
         <${IconCopyButton}>PhoneCallInFill12Icon<//>
         <${PhoneCallOutFill12Icon} />
         <${IconCopyButton}>PhoneCallOutFill12Icon<//>
         <${PhoneCallPauseFill12Icon} />
         <${IconCopyButton}>PhoneCallPauseFill12Icon<//>
         <${PhoneCallSpeakerFill12Icon} />
         <${IconCopyButton}>PhoneCallSpeakerFill12Icon<//>
         <${PhoneCallTransferFill12Icon} />
         <${IconCopyButton}>PhoneCallTransferFill12Icon<//>
         <${PhoneCallTransferOnlyFill12Icon} />
         <${IconCopyButton}>PhoneCallTransferOnlyFill12Icon<//>
         <${PhoneFill12Icon} />
         <${IconCopyButton}>PhoneFill12Icon<//>
         <${PinFill12Icon} />
         <${IconCopyButton}>PinFill12Icon<//>
         <${PinRemoveFill12Icon} />
         <${IconCopyButton}>PinRemoveFill12Icon<//>
         <${PlayCircleFill12Icon} />
         <${IconCopyButton}>PlayCircleFill12Icon<//>
         <${PlayFill12Icon} />
         <${IconCopyButton}>PlayFill12Icon<//>
         <${PlugFill12Icon} />
         <${IconCopyButton}>PlugFill12Icon<//>
         <${PlusCircleFill12Icon} />
         <${IconCopyButton}>PlusCircleFill12Icon<//>
         <${PlusFill12Icon} />
         <${IconCopyButton}>PlusFill12Icon<//>
         <${PuzzlePieceFill12Icon} />
         <${IconCopyButton}>PuzzlePieceFill12Icon<//>
         <${QuestionMarkFill12Icon} />
         <${IconCopyButton}>QuestionMarkFill12Icon<//>
         <${QuoteFill12Icon} />
         <${IconCopyButton}>QuoteFill12Icon<//>
         <${RearrangeFill12Icon} />
         <${IconCopyButton}>RearrangeFill12Icon<//>
         <${RecordFill12Icon} />
         <${IconCopyButton}>RecordFill12Icon<//>
         <${ReloadFill12Icon} />
         <${IconCopyButton}>ReloadFill12Icon<//>
         <${SandboxFill12Icon} />
         <${IconCopyButton}>SandboxFill12Icon<//>
         <${SearchFill12Icon} />
         <${IconCopyButton}>SearchFill12Icon<//>
         <${ShapesFill12Icon} />
         <${IconCopyButton}>ShapesFill12Icon<//>
         <${ShareFill12Icon} />
         <${IconCopyButton}>ShareFill12Icon<//>
         <${ShieldFill12Icon} />
         <${IconCopyButton}>ShieldFill12Icon<//>
         <${ShoppingCartFill12Icon} />
         <${IconCopyButton}>ShoppingCartFill12Icon<//>
         <${SignpostFill12Icon} />
         <${IconCopyButton}>SignpostFill12Icon<//>
         <${SlackFill12Icon} />
         <${IconCopyButton}>SlackFill12Icon<//>
         <${SmileSlightFill12Icon} />
         <${IconCopyButton}>SmileSlightFill12Icon<//>
         <${SmileyFill12Icon} />
         <${IconCopyButton}>SmileyFill12Icon<//>
         <${SortFill12Icon} />
         <${IconCopyButton}>SortFill12Icon<//>
         <${SpeechBubbleConversationFill12Icon} />
         <${IconCopyButton}>SpeechBubbleConversationFill12Icon<//>
         <${SpeechBubbleLightningBoltFill12Icon} />
         <${IconCopyButton}>SpeechBubbleLightningBoltFill12Icon<//>
         <${SpeechBubblePlainFill12Icon} />
         <${IconCopyButton}>SpeechBubblePlainFill12Icon<//>
         <${StarFill12Icon} />
         <${IconCopyButton}>StarFill12Icon<//>
         <${TableFill12Icon} />
         <${IconCopyButton}>TableFill12Icon<//>
         <${TagFill12Icon} />
         <${IconCopyButton}>TagFill12Icon<//>
         <${TerminalCliFill12Icon} />
         <${IconCopyButton}>TerminalCliFill12Icon<//>
         <${TerminalWindowFill12Icon} />
         <${IconCopyButton}>TerminalWindowFill12Icon<//>
         <${TextColorFill12Icon} />
         <${IconCopyButton}>TextColorFill12Icon<//>
         <${TextFill12Icon} />
         <${IconCopyButton}>TextFill12Icon<//>
         <${ThumbsDownFill12Icon} />
         <${IconCopyButton}>ThumbsDownFill12Icon<//>
         <${ThumbsUpFill12Icon} />
         <${IconCopyButton}>ThumbsUpFill12Icon<//>
         <${TranslationCreatedFill12Icon} />
         <${IconCopyButton}>TranslationCreatedFill12Icon<//>
         <${TranslationDeletedFill12Icon} />
         <${IconCopyButton}>TranslationDeletedFill12Icon<//>
         <${TranslationExistsFill12Icon} />
         <${IconCopyButton}>TranslationExistsFill12Icon<//>
         <${TranslationOutdatedFill12Icon} />
         <${IconCopyButton}>TranslationOutdatedFill12Icon<//>
         <${TranslationUpdatedFill12Icon} />
         <${IconCopyButton}>TranslationUpdatedFill12Icon<//>
         <${TrashFill12Icon} />
         <${IconCopyButton}>TrashFill12Icon<//>
         <${TwitterFill12Icon} />
         <${IconCopyButton}>TwitterFill12Icon<//>
         <${UnderlineFill12Icon} />
         <${IconCopyButton}>UnderlineFill12Icon<//>
         <${UploadFill12Icon} />
         <${IconCopyButton}>UploadFill12Icon<//>
         <${UserCircleFill12Icon} />
         <${IconCopyButton}>UserCircleFill12Icon<//>
         <${UserFollowFill12Icon} />
         <${IconCopyButton}>UserFollowFill12Icon<//>
         <${UserGroupFill12Icon} />
         <${IconCopyButton}>UserGroupFill12Icon<//>
         <${UserListFill12Icon} />
         <${IconCopyButton}>UserListFill12Icon<//>
         <${UserSoloFill12Icon} />
         <${IconCopyButton}>UserSoloFill12Icon<//>
         <${UserUnfollowFill12Icon} />
         <${IconCopyButton}>UserUnfollowFill12Icon<//>
         <${VoicemailFill12Icon} />
         <${IconCopyButton}>VoicemailFill12Icon<//>
         <${VolumeMutedFill12Icon} />
         <${IconCopyButton}>VolumeMutedFill12Icon<//>
         <${VolumeUnmutedFill12Icon} />
         <${IconCopyButton}>VolumeUnmutedFill12Icon<//>
         <${WechatFill12Icon} />
         <${IconCopyButton}>WechatFill12Icon<//>
         <${WhatsappFill12Icon} />
         <${IconCopyButton}>WhatsappFill12Icon<//>
         <${WrapLeftFill12Icon} />
         <${IconCopyButton}>WrapLeftFill12Icon<//>
         <${WrapRightFill12Icon} />
         <${IconCopyButton}>WrapRightFill12Icon<//>
         <${XCircleFill12Icon} />
         <${IconCopyButton}>XCircleFill12Icon<//>
         <${XFill12Icon} />
         <${IconCopyButton}>XFill12Icon<//>
         <${ZendeskFill12Icon} />
         <${IconCopyButton}>ZendeskFill12Icon<//>
      </div>
    `;
  }
}

export default IconsPage;
