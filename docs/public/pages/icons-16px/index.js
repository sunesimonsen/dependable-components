import { html } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import LightbulbStroke12Icon from "@dependable/icons/LightbulbStroke12Icon";

import I123Stroke16Icon from "@dependable/icons/I123Stroke16Icon";
import AdjustStroke16Icon from "@dependable/icons/AdjustStroke16Icon";
import AlertErrorStroke16Icon from "@dependable/icons/AlertErrorStroke16Icon";
import AlertWarningStroke16Icon from "@dependable/icons/AlertWarningStroke16Icon";
import AlignCenterStroke16Icon from "@dependable/icons/AlignCenterStroke16Icon";
import AlignJustifyStroke16Icon from "@dependable/icons/AlignJustifyStroke16Icon";
import AlignLeftStroke16Icon from "@dependable/icons/AlignLeftStroke16Icon";
import AlignRightStroke16Icon from "@dependable/icons/AlignRightStroke16Icon";
import AltTextStroke16Icon from "@dependable/icons/AltTextStroke16Icon";
import ArrowLeftSmStroke16Icon from "@dependable/icons/ArrowLeftSmStroke16Icon";
import ArrowLeftStroke16Icon from "@dependable/icons/ArrowLeftStroke16Icon";
import ArrowLeftUpStroke16Icon from "@dependable/icons/ArrowLeftUpStroke16Icon";
import ArrowRetweetStroke16Icon from "@dependable/icons/ArrowRetweetStroke16Icon";
import ArrowReverseStroke16Icon from "@dependable/icons/ArrowReverseStroke16Icon";
import ArrowTrendingStroke16Icon from "@dependable/icons/ArrowTrendingStroke16Icon";
import AsteriskStroke16Icon from "@dependable/icons/AsteriskStroke16Icon";
import AtStroke16Icon from "@dependable/icons/AtStroke16Icon";
import BarChartStroke16Icon from "@dependable/icons/BarChartStroke16Icon";
import BasketballStroke16Icon from "@dependable/icons/BasketballStroke16Icon";
import BoldStroke16Icon from "@dependable/icons/BoldStroke16Icon";
import BookClosedStroke16Icon from "@dependable/icons/BookClosedStroke16Icon";
import BookOpenStroke16Icon from "@dependable/icons/BookOpenStroke16Icon";
import Box3dStroke16Icon from "@dependable/icons/Box3dStroke16Icon";
import BuildingStroke16Icon from "@dependable/icons/BuildingStroke16Icon";
import CalendarStroke16Icon from "@dependable/icons/CalendarStroke16Icon";
import CameraStroke16Icon from "@dependable/icons/CameraStroke16Icon";
import CarStroke16Icon from "@dependable/icons/CarStroke16Icon";
import CenterStroke16Icon from "@dependable/icons/CenterStroke16Icon";
import CheckBadgeStroke16Icon from "@dependable/icons/CheckBadgeStroke16Icon";
import CheckBoxDoubleStroke16Icon from "@dependable/icons/CheckBoxDoubleStroke16Icon";
import CheckBoxStroke16Icon from "@dependable/icons/CheckBoxStroke16Icon";
import CheckCircleStroke16Icon from "@dependable/icons/CheckCircleStroke16Icon";
import CheckDoubleStroke16Icon from "@dependable/icons/CheckDoubleStroke16Icon";
import CheckLgStroke16Icon from "@dependable/icons/CheckLgStroke16Icon";
import CheckSmStroke16Icon from "@dependable/icons/CheckSmStroke16Icon";
import ChevronBoxStroke16Icon from "@dependable/icons/ChevronBoxStroke16Icon";
import ChevronDoubleDownStroke16Icon from "@dependable/icons/ChevronDoubleDownStroke16Icon";
import ChevronDoubleLeftStroke16Icon from "@dependable/icons/ChevronDoubleLeftStroke16Icon";
import ChevronDoubleRightStroke16Icon from "@dependable/icons/ChevronDoubleRightStroke16Icon";
import ChevronDoubleUpStroke16Icon from "@dependable/icons/ChevronDoubleUpStroke16Icon";
import ChevronDownStroke16Icon from "@dependable/icons/ChevronDownStroke16Icon";
import ChevronLeftStroke16Icon from "@dependable/icons/ChevronLeftStroke16Icon";
import ChevronRightStroke16Icon from "@dependable/icons/ChevronRightStroke16Icon";
import ChevronUpStroke16Icon from "@dependable/icons/ChevronUpStroke16Icon";
import CircleFullStroke16Icon from "@dependable/icons/CircleFullStroke16Icon";
import CircleLineStroke16Icon from "@dependable/icons/CircleLineStroke16Icon";
import CircleSmStroke16Icon from "@dependable/icons/CircleSmStroke16Icon";
import CircleStroke16Icon from "@dependable/icons/CircleStroke16Icon";
import ClipboardBlankStroke16Icon from "@dependable/icons/ClipboardBlankStroke16Icon";
import ClipboardCheckStroke16Icon from "@dependable/icons/ClipboardCheckStroke16Icon";
import ClipboardListStroke16Icon from "@dependable/icons/ClipboardListStroke16Icon";
import ClockCycleStroke16Icon from "@dependable/icons/ClockCycleStroke16Icon";
import ClockInStroke16Icon from "@dependable/icons/ClockInStroke16Icon";
import ClockOutStroke16Icon from "@dependable/icons/ClockOutStroke16Icon";
import ClockStroke16Icon from "@dependable/icons/ClockStroke16Icon";
import CopyStroke16Icon from "@dependable/icons/CopyStroke16Icon";
import CreditCardStroke16Icon from "@dependable/icons/CreditCardStroke16Icon";
import CssStroke16Icon from "@dependable/icons/CssStroke16Icon";
import CursorArrowStroke16Icon from "@dependable/icons/CursorArrowStroke16Icon";
import CutleryStroke16Icon from "@dependable/icons/CutleryStroke16Icon";
import DashStroke16Icon from "@dependable/icons/DashStroke16Icon";
import DatabaseStroke16Icon from "@dependable/icons/DatabaseStroke16Icon";
import DecimalStroke16Icon from "@dependable/icons/DecimalStroke16Icon";
import DirectionLtrStroke16Icon from "@dependable/icons/DirectionLtrStroke16Icon";
import DirectionRtlStroke16Icon from "@dependable/icons/DirectionRtlStroke16Icon";
import DocumentSearchStroke16Icon from "@dependable/icons/DocumentSearchStroke16Icon";
import DownloadStroke16Icon from "@dependable/icons/DownloadStroke16Icon";
import DuplicateStroke16Icon from "@dependable/icons/DuplicateStroke16Icon";
import EditRedoStroke16Icon from "@dependable/icons/EditRedoStroke16Icon";
import EditUndoStroke16Icon from "@dependable/icons/EditUndoStroke16Icon";
import EmailStroke16Icon from "@dependable/icons/EmailStroke16Icon";
import EraserStroke16Icon from "@dependable/icons/EraserStroke16Icon";
import ExitStroke16Icon from "@dependable/icons/ExitStroke16Icon";
import EyeHideStroke16Icon from "@dependable/icons/EyeHideStroke16Icon";
import EyeStroke16Icon from "@dependable/icons/EyeStroke16Icon";
import FacebookStroke16Icon from "@dependable/icons/FacebookStroke16Icon";
import FileDocumentStroke16Icon from "@dependable/icons/FileDocumentStroke16Icon";
import FileErrorStroke16Icon from "@dependable/icons/FileErrorStroke16Icon";
import FileGenericStroke16Icon from "@dependable/icons/FileGenericStroke16Icon";
import FileImageStroke16Icon from "@dependable/icons/FileImageStroke16Icon";
import FilePdfStroke16Icon from "@dependable/icons/FilePdfStroke16Icon";
import FilePresentationStroke16Icon from "@dependable/icons/FilePresentationStroke16Icon";
import FileSpreadsheetStroke16Icon from "@dependable/icons/FileSpreadsheetStroke16Icon";
import FileZipStroke16Icon from "@dependable/icons/FileZipStroke16Icon";
import FilterStroke16Icon from "@dependable/icons/FilterStroke16Icon";
import FlagStroke16Icon from "@dependable/icons/FlagStroke16Icon";
import FolderClosedStroke16Icon from "@dependable/icons/FolderClosedStroke16Icon";
import FolderOpenStroke16Icon from "@dependable/icons/FolderOpenStroke16Icon";
import FullWidthStroke16Icon from "@dependable/icons/FullWidthStroke16Icon";
import GearStroke16Icon from "@dependable/icons/GearStroke16Icon";
import GithubStroke16Icon from "@dependable/icons/GithubStroke16Icon";
import GlobeStroke16Icon from "@dependable/icons/GlobeStroke16Icon";
import Grid2x2Stroke16Icon from "@dependable/icons/Grid2x2Stroke16Icon";
import Grid3x3Stroke16Icon from "@dependable/icons/Grid3x3Stroke16Icon";
import Grip16Icon from "@dependable/icons/Grip16Icon";
import HeadingStroke16Icon from "@dependable/icons/HeadingStroke16Icon";
import HeartStroke16Icon from "@dependable/icons/HeartStroke16Icon";
import HistoryStroke16Icon from "@dependable/icons/HistoryStroke16Icon";
import HomeStroke16Icon from "@dependable/icons/HomeStroke16Icon";
import HorizontalRuleStroke16Icon from "@dependable/icons/HorizontalRuleStroke16Icon";
import ImageStroke16Icon from "@dependable/icons/ImageStroke16Icon";
import InboxStroke16Icon from "@dependable/icons/InboxStroke16Icon";
import IndentDecreaseStroke16Icon from "@dependable/icons/IndentDecreaseStroke16Icon";
import IndentIncreaseStroke16Icon from "@dependable/icons/IndentIncreaseStroke16Icon";
import InfoStroke16Icon from "@dependable/icons/InfoStroke16Icon";
import InterlockingRingsStroke16Icon from "@dependable/icons/InterlockingRingsStroke16Icon";
import ItalicStroke16Icon from "@dependable/icons/ItalicStroke16Icon";
import LeafStroke16Icon from "@dependable/icons/LeafStroke16Icon";
import LifesaverStroke16Icon from "@dependable/icons/LifesaverStroke16Icon";
import LightbulbStroke16Icon from "@dependable/icons/LightbulbStroke16Icon";
import LightningBoltStroke16Icon from "@dependable/icons/LightningBoltStroke16Icon";
import LineGraphStroke16Icon from "@dependable/icons/LineGraphStroke16Icon";
import LineSocialStroke16Icon from "@dependable/icons/LineSocialStroke16Icon";
import LinkRemoveStroke16Icon from "@dependable/icons/LinkRemoveStroke16Icon";
import LinkStroke16Icon from "@dependable/icons/LinkStroke16Icon";
import LinkedinStroke16Icon from "@dependable/icons/LinkedinStroke16Icon";
import ListBulletStroke16Icon from "@dependable/icons/ListBulletStroke16Icon";
import ListNumberRtlStroke16Icon from "@dependable/icons/ListNumberRtlStroke16Icon";
import ListNumberStroke16Icon from "@dependable/icons/ListNumberStroke16Icon";
import LocationStroke16Icon from "@dependable/icons/LocationStroke16Icon";
import LockLockedStroke16Icon from "@dependable/icons/LockLockedStroke16Icon";
import LockUnlockedStroke16Icon from "@dependable/icons/LockUnlockedStroke16Icon";
import MarkupStroke16Icon from "@dependable/icons/MarkupStroke16Icon";
import MaximizeStroke16Icon from "@dependable/icons/MaximizeStroke16Icon";
import MegaphoneStroke16Icon from "@dependable/icons/MegaphoneStroke16Icon";
import MenuStroke16Icon from "@dependable/icons/MenuStroke16Icon";
import MessengerStroke16Icon from "@dependable/icons/MessengerStroke16Icon";
import MicrophoneOffStroke16Icon from "@dependable/icons/MicrophoneOffStroke16Icon";
import MicrophoneOnStroke16Icon from "@dependable/icons/MicrophoneOnStroke16Icon";
import MinimizeStroke16Icon from "@dependable/icons/MinimizeStroke16Icon";
import MobilePhoneStroke16Icon from "@dependable/icons/MobilePhoneStroke16Icon";
import MonitorStroke16Icon from "@dependable/icons/MonitorStroke16Icon";
import MultilineStroke16Icon from "@dependable/icons/MultilineStroke16Icon";
import NewWindowStroke16Icon from "@dependable/icons/NewWindowStroke16Icon";
import NotesStroke16Icon from "@dependable/icons/NotesStroke16Icon";
import NotificationStroke16Icon from "@dependable/icons/NotificationStroke16Icon";
import NumberStroke16Icon from "@dependable/icons/NumberStroke16Icon";
import OriginalSizeStroke16Icon from "@dependable/icons/OriginalSizeStroke16Icon";
import OverflowStroke16Icon from "@dependable/icons/OverflowStroke16Icon";
import OverflowVerticalStroke16Icon from "@dependable/icons/OverflowVerticalStroke16Icon";
import PaletteStroke16Icon from "@dependable/icons/PaletteStroke16Icon";
import PanelsStroke16Icon from "@dependable/icons/PanelsStroke16Icon";
import Paperclip16Icon from "@dependable/icons/Paperclip16Icon";
import ParenthesesStroke16Icon from "@dependable/icons/ParenthesesStroke16Icon";
import PauseStroke16Icon from "@dependable/icons/PauseStroke16Icon";
import PencilStroke16Icon from "@dependable/icons/PencilStroke16Icon";
import PhoneCallEndStroke16Icon from "@dependable/icons/PhoneCallEndStroke16Icon";
import PhoneCallInStroke16Icon from "@dependable/icons/PhoneCallInStroke16Icon";
import PhoneCallOutStroke16Icon from "@dependable/icons/PhoneCallOutStroke16Icon";
import PhoneCallPauseStroke16Icon from "@dependable/icons/PhoneCallPauseStroke16Icon";
import PhoneCallSpeakerStroke16Icon from "@dependable/icons/PhoneCallSpeakerStroke16Icon";
import PhoneCallTransferOnlyStroke16Icon from "@dependable/icons/PhoneCallTransferOnlyStroke16Icon";
import PhoneCallTransferStroke16Icon from "@dependable/icons/PhoneCallTransferStroke16Icon";
import PhoneStroke16Icon from "@dependable/icons/PhoneStroke16Icon";
import PinRemoveStroke16Icon from "@dependable/icons/PinRemoveStroke16Icon";
import PinStroke16Icon from "@dependable/icons/PinStroke16Icon";
import PlayCircleStroke16Icon from "@dependable/icons/PlayCircleStroke16Icon";
import PlayStroke16Icon from "@dependable/icons/PlayStroke16Icon";
import PlugStroke16Icon from "@dependable/icons/PlugStroke16Icon";
import PlusCircleStroke16Icon from "@dependable/icons/PlusCircleStroke16Icon";
import PlusStroke16Icon from "@dependable/icons/PlusStroke16Icon";
import PuzzlePieceStroke16Icon from "@dependable/icons/PuzzlePieceStroke16Icon";
import QuestionMarkStroke16Icon from "@dependable/icons/QuestionMarkStroke16Icon";
import QuoteStroke16Icon from "@dependable/icons/QuoteStroke16Icon";
import RearrangeStroke16Icon from "@dependable/icons/RearrangeStroke16Icon";
import RecordStroke16Icon from "@dependable/icons/RecordStroke16Icon";
import ReloadStroke16Icon from "@dependable/icons/ReloadStroke16Icon";
import SandboxStroke16Icon from "@dependable/icons/SandboxStroke16Icon";
import SearchStroke16Icon from "@dependable/icons/SearchStroke16Icon";
import ShapesStroke16Icon from "@dependable/icons/ShapesStroke16Icon";
import ShareStroke16Icon from "@dependable/icons/ShareStroke16Icon";
import ShieldStroke16Icon from "@dependable/icons/ShieldStroke16Icon";
import ShoppingCartStroke16Icon from "@dependable/icons/ShoppingCartStroke16Icon";
import SignpostStroke16Icon from "@dependable/icons/SignpostStroke16Icon";
import SlackStroke16Icon from "@dependable/icons/SlackStroke16Icon";
import SmileSlightStroke16Icon from "@dependable/icons/SmileSlightStroke16Icon";
import SmileyStroke16Icon from "@dependable/icons/SmileyStroke16Icon";
import SortStroke16Icon from "@dependable/icons/SortStroke16Icon";
import SpeechBubbleConversationStroke16Icon from "@dependable/icons/SpeechBubbleConversationStroke16Icon";
import SpeechBubbleLightningBoltStroke16Icon from "@dependable/icons/SpeechBubbleLightningBoltStroke16Icon";
import SpeechBubblePlainStroke16Icon from "@dependable/icons/SpeechBubblePlainStroke16Icon";
import StarStroke16Icon from "@dependable/icons/StarStroke16Icon";
import TableStroke16Icon from "@dependable/icons/TableStroke16Icon";
import TagStroke16Icon from "@dependable/icons/TagStroke16Icon";
import TerminalCliStroke16Icon from "@dependable/icons/TerminalCliStroke16Icon";
import TerminalWindowStroke16Icon from "@dependable/icons/TerminalWindowStroke16Icon";
import TextColorStroke16Icon from "@dependable/icons/TextColorStroke16Icon";
import TextStroke16Icon from "@dependable/icons/TextStroke16Icon";
import ThumbsDownStroke16Icon from "@dependable/icons/ThumbsDownStroke16Icon";
import ThumbsUpStroke16Icon from "@dependable/icons/ThumbsUpStroke16Icon";
import TranslationCreatedStroke16Icon from "@dependable/icons/TranslationCreatedStroke16Icon";
import TranslationDeletedStroke16Icon from "@dependable/icons/TranslationDeletedStroke16Icon";
import TranslationExistsStroke16Icon from "@dependable/icons/TranslationExistsStroke16Icon";
import TranslationOutdatedStroke16Icon from "@dependable/icons/TranslationOutdatedStroke16Icon";
import TranslationUpdatedStroke16Icon from "@dependable/icons/TranslationUpdatedStroke16Icon";
import TrashStroke16Icon from "@dependable/icons/TrashStroke16Icon";
import TwitterStroke16Icon from "@dependable/icons/TwitterStroke16Icon";
import UnderlineStroke16Icon from "@dependable/icons/UnderlineStroke16Icon";
import UploadStroke16Icon from "@dependable/icons/UploadStroke16Icon";
import UserCircleStroke16Icon from "@dependable/icons/UserCircleStroke16Icon";
import UserFollowStroke16Icon from "@dependable/icons/UserFollowStroke16Icon";
import UserGroupStroke16Icon from "@dependable/icons/UserGroupStroke16Icon";
import UserListStroke16Icon from "@dependable/icons/UserListStroke16Icon";
import UserSoloStroke16Icon from "@dependable/icons/UserSoloStroke16Icon";
import UserUnfollowStroke16Icon from "@dependable/icons/UserUnfollowStroke16Icon";
import VoicemailStroke16Icon from "@dependable/icons/VoicemailStroke16Icon";
import VolumeMutedStroke16Icon from "@dependable/icons/VolumeMutedStroke16Icon";
import VolumeUnmutedStroke16Icon from "@dependable/icons/VolumeUnmutedStroke16Icon";
import WechatStroke16Icon from "@dependable/icons/WechatStroke16Icon";
import WhatsappStroke16Icon from "@dependable/icons/WhatsappStroke16Icon";
import WrapLeftStroke16Icon from "@dependable/icons/WrapLeftStroke16Icon";
import WrapRightStroke16Icon from "@dependable/icons/WrapRightStroke16Icon";
import XCircleStroke16Icon from "@dependable/icons/XCircleStroke16Icon";
import XStroke16Icon from "@dependable/icons/XStroke16Icon";
import ZendeskStroke16Icon from "@dependable/icons/ZendeskStroke16Icon";

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
      <${Title}>16px<//>
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
         <${I123Stroke16Icon} />
         <${IconCopyButton}>I123Stroke16Icon<//>
         <${AdjustStroke16Icon} />
         <${IconCopyButton}>AdjustStroke16Icon<//>
         <${AlertErrorStroke16Icon} />
         <${IconCopyButton}>AlertErrorStroke16Icon<//>
         <${AlertWarningStroke16Icon} />
         <${IconCopyButton}>AlertWarningStroke16Icon<//>
         <${AlignCenterStroke16Icon} />
         <${IconCopyButton}>AlignCenterStroke16Icon<//>
         <${AlignJustifyStroke16Icon} />
         <${IconCopyButton}>AlignJustifyStroke16Icon<//>
         <${AlignLeftStroke16Icon} />
         <${IconCopyButton}>AlignLeftStroke16Icon<//>
         <${AlignRightStroke16Icon} />
         <${IconCopyButton}>AlignRightStroke16Icon<//>
         <${AltTextStroke16Icon} />
         <${IconCopyButton}>AltTextStroke16Icon<//>
         <${ArrowLeftSmStroke16Icon} />
         <${IconCopyButton}>ArrowLeftSmStroke16Icon<//>
         <${ArrowLeftStroke16Icon} />
         <${IconCopyButton}>ArrowLeftStroke16Icon<//>
         <${ArrowLeftUpStroke16Icon} />
         <${IconCopyButton}>ArrowLeftUpStroke16Icon<//>
         <${ArrowRetweetStroke16Icon} />
         <${IconCopyButton}>ArrowRetweetStroke16Icon<//>
         <${ArrowReverseStroke16Icon} />
         <${IconCopyButton}>ArrowReverseStroke16Icon<//>
         <${ArrowTrendingStroke16Icon} />
         <${IconCopyButton}>ArrowTrendingStroke16Icon<//>
         <${AsteriskStroke16Icon} />
         <${IconCopyButton}>AsteriskStroke16Icon<//>
         <${AtStroke16Icon} />
         <${IconCopyButton}>AtStroke16Icon<//>
         <${BarChartStroke16Icon} />
         <${IconCopyButton}>BarChartStroke16Icon<//>
         <${BasketballStroke16Icon} />
         <${IconCopyButton}>BasketballStroke16Icon<//>
         <${BoldStroke16Icon} />
         <${IconCopyButton}>BoldStroke16Icon<//>
         <${BookClosedStroke16Icon} />
         <${IconCopyButton}>BookClosedStroke16Icon<//>
         <${BookOpenStroke16Icon} />
         <${IconCopyButton}>BookOpenStroke16Icon<//>
         <${Box3dStroke16Icon} />
         <${IconCopyButton}>Box3dStroke16Icon<//>
         <${BuildingStroke16Icon} />
         <${IconCopyButton}>BuildingStroke16Icon<//>
         <${CalendarStroke16Icon} />
         <${IconCopyButton}>CalendarStroke16Icon<//>
         <${CameraStroke16Icon} />
         <${IconCopyButton}>CameraStroke16Icon<//>
         <${CarStroke16Icon} />
         <${IconCopyButton}>CarStroke16Icon<//>
         <${CenterStroke16Icon} />
         <${IconCopyButton}>CenterStroke16Icon<//>
         <${CheckBadgeStroke16Icon} />
         <${IconCopyButton}>CheckBadgeStroke16Icon<//>
         <${CheckBoxDoubleStroke16Icon} />
         <${IconCopyButton}>CheckBoxDoubleStroke16Icon<//>
         <${CheckBoxStroke16Icon} />
         <${IconCopyButton}>CheckBoxStroke16Icon<//>
         <${CheckCircleStroke16Icon} />
         <${IconCopyButton}>CheckCircleStroke16Icon<//>
         <${CheckDoubleStroke16Icon} />
         <${IconCopyButton}>CheckDoubleStroke16Icon<//>
         <${CheckLgStroke16Icon} />
         <${IconCopyButton}>CheckLgStroke16Icon<//>
         <${CheckSmStroke16Icon} />
         <${IconCopyButton}>CheckSmStroke16Icon<//>
         <${ChevronBoxStroke16Icon} />
         <${IconCopyButton}>ChevronBoxStroke16Icon<//>
         <${ChevronDoubleDownStroke16Icon} />
         <${IconCopyButton}>ChevronDoubleDownStroke16Icon<//>
         <${ChevronDoubleLeftStroke16Icon} />
         <${IconCopyButton}>ChevronDoubleLeftStroke16Icon<//>
         <${ChevronDoubleRightStroke16Icon} />
         <${IconCopyButton}>ChevronDoubleRightStroke16Icon<//>
         <${ChevronDoubleUpStroke16Icon} />
         <${IconCopyButton}>ChevronDoubleUpStroke16Icon<//>
         <${ChevronDownStroke16Icon} />
         <${IconCopyButton}>ChevronDownStroke16Icon<//>
         <${ChevronLeftStroke16Icon} />
         <${IconCopyButton}>ChevronLeftStroke16Icon<//>
         <${ChevronRightStroke16Icon} />
         <${IconCopyButton}>ChevronRightStroke16Icon<//>
         <${ChevronUpStroke16Icon} />
         <${IconCopyButton}>ChevronUpStroke16Icon<//>
         <${CircleFullStroke16Icon} />
         <${IconCopyButton}>CircleFullStroke16Icon<//>
         <${CircleLineStroke16Icon} />
         <${IconCopyButton}>CircleLineStroke16Icon<//>
         <${CircleSmStroke16Icon} />
         <${IconCopyButton}>CircleSmStroke16Icon<//>
         <${CircleStroke16Icon} />
         <${IconCopyButton}>CircleStroke16Icon<//>
         <${ClipboardBlankStroke16Icon} />
         <${IconCopyButton}>ClipboardBlankStroke16Icon<//>
         <${ClipboardCheckStroke16Icon} />
         <${IconCopyButton}>ClipboardCheckStroke16Icon<//>
         <${ClipboardListStroke16Icon} />
         <${IconCopyButton}>ClipboardListStroke16Icon<//>
         <${ClockCycleStroke16Icon} />
         <${IconCopyButton}>ClockCycleStroke16Icon<//>
         <${ClockInStroke16Icon} />
         <${IconCopyButton}>ClockInStroke16Icon<//>
         <${ClockOutStroke16Icon} />
         <${IconCopyButton}>ClockOutStroke16Icon<//>
         <${ClockStroke16Icon} />
         <${IconCopyButton}>ClockStroke16Icon<//>
         <${CopyStroke16Icon} />
         <${IconCopyButton}>CopyStroke16Icon<//>
         <${CreditCardStroke16Icon} />
         <${IconCopyButton}>CreditCardStroke16Icon<//>
         <${CssStroke16Icon} />
         <${IconCopyButton}>CssStroke16Icon<//>
         <${CursorArrowStroke16Icon} />
         <${IconCopyButton}>CursorArrowStroke16Icon<//>
         <${CutleryStroke16Icon} />
         <${IconCopyButton}>CutleryStroke16Icon<//>
         <${DashStroke16Icon} />
         <${IconCopyButton}>DashStroke16Icon<//>
         <${DatabaseStroke16Icon} />
         <${IconCopyButton}>DatabaseStroke16Icon<//>
         <${DecimalStroke16Icon} />
         <${IconCopyButton}>DecimalStroke16Icon<//>
         <${DirectionLtrStroke16Icon} />
         <${IconCopyButton}>DirectionLtrStroke16Icon<//>
         <${DirectionRtlStroke16Icon} />
         <${IconCopyButton}>DirectionRtlStroke16Icon<//>
         <${DocumentSearchStroke16Icon} />
         <${IconCopyButton}>DocumentSearchStroke16Icon<//>
         <${DownloadStroke16Icon} />
         <${IconCopyButton}>DownloadStroke16Icon<//>
         <${DuplicateStroke16Icon} />
         <${IconCopyButton}>DuplicateStroke16Icon<//>
         <${EditRedoStroke16Icon} />
         <${IconCopyButton}>EditRedoStroke16Icon<//>
         <${EditUndoStroke16Icon} />
         <${IconCopyButton}>EditUndoStroke16Icon<//>
         <${EmailStroke16Icon} />
         <${IconCopyButton}>EmailStroke16Icon<//>
         <${EraserStroke16Icon} />
         <${IconCopyButton}>EraserStroke16Icon<//>
         <${ExitStroke16Icon} />
         <${IconCopyButton}>ExitStroke16Icon<//>
         <${EyeHideStroke16Icon} />
         <${IconCopyButton}>EyeHideStroke16Icon<//>
         <${EyeStroke16Icon} />
         <${IconCopyButton}>EyeStroke16Icon<//>
         <${FacebookStroke16Icon} />
         <${IconCopyButton}>FacebookStroke16Icon<//>
         <${FileDocumentStroke16Icon} />
         <${IconCopyButton}>FileDocumentStroke16Icon<//>
         <${FileErrorStroke16Icon} />
         <${IconCopyButton}>FileErrorStroke16Icon<//>
         <${FileGenericStroke16Icon} />
         <${IconCopyButton}>FileGenericStroke16Icon<//>
         <${FileImageStroke16Icon} />
         <${IconCopyButton}>FileImageStroke16Icon<//>
         <${FilePdfStroke16Icon} />
         <${IconCopyButton}>FilePdfStroke16Icon<//>
         <${FilePresentationStroke16Icon} />
         <${IconCopyButton}>FilePresentationStroke16Icon<//>
         <${FileSpreadsheetStroke16Icon} />
         <${IconCopyButton}>FileSpreadsheetStroke16Icon<//>
         <${FileZipStroke16Icon} />
         <${IconCopyButton}>FileZipStroke16Icon<//>
         <${FilterStroke16Icon} />
         <${IconCopyButton}>FilterStroke16Icon<//>
         <${FlagStroke16Icon} />
         <${IconCopyButton}>FlagStroke16Icon<//>
         <${FolderClosedStroke16Icon} />
         <${IconCopyButton}>FolderClosedStroke16Icon<//>
         <${FolderOpenStroke16Icon} />
         <${IconCopyButton}>FolderOpenStroke16Icon<//>
         <${FullWidthStroke16Icon} />
         <${IconCopyButton}>FullWidthStroke16Icon<//>
         <${GearStroke16Icon} />
         <${IconCopyButton}>GearStroke16Icon<//>
         <${GithubStroke16Icon} />
         <${IconCopyButton}>GithubStroke16Icon<//>
         <${GlobeStroke16Icon} />
         <${IconCopyButton}>GlobeStroke16Icon<//>
         <${Grid2x2Stroke16Icon} />
         <${IconCopyButton}>Grid2x2Stroke16Icon<//>
         <${Grid3x3Stroke16Icon} />
         <${IconCopyButton}>Grid3x3Stroke16Icon<//>
         <${Grip16Icon} />
         <${IconCopyButton}>Grip16Icon<//>
         <${HeadingStroke16Icon} />
         <${IconCopyButton}>HeadingStroke16Icon<//>
         <${HeartStroke16Icon} />
         <${IconCopyButton}>HeartStroke16Icon<//>
         <${HistoryStroke16Icon} />
         <${IconCopyButton}>HistoryStroke16Icon<//>
         <${HomeStroke16Icon} />
         <${IconCopyButton}>HomeStroke16Icon<//>
         <${HorizontalRuleStroke16Icon} />
         <${IconCopyButton}>HorizontalRuleStroke16Icon<//>
         <${ImageStroke16Icon} />
         <${IconCopyButton}>ImageStroke16Icon<//>
         <${InboxStroke16Icon} />
         <${IconCopyButton}>InboxStroke16Icon<//>
         <${IndentDecreaseStroke16Icon} />
         <${IconCopyButton}>IndentDecreaseStroke16Icon<//>
         <${IndentIncreaseStroke16Icon} />
         <${IconCopyButton}>IndentIncreaseStroke16Icon<//>
         <${InfoStroke16Icon} />
         <${IconCopyButton}>InfoStroke16Icon<//>
         <${InterlockingRingsStroke16Icon} />
         <${IconCopyButton}>InterlockingRingsStroke16Icon<//>
         <${ItalicStroke16Icon} />
         <${IconCopyButton}>ItalicStroke16Icon<//>
         <${LeafStroke16Icon} />
         <${IconCopyButton}>LeafStroke16Icon<//>
         <${LifesaverStroke16Icon} />
         <${IconCopyButton}>LifesaverStroke16Icon<//>
         <${LightbulbStroke16Icon} />
         <${IconCopyButton}>LightbulbStroke16Icon<//>
         <${LightningBoltStroke16Icon} />
         <${IconCopyButton}>LightningBoltStroke16Icon<//>
         <${LineGraphStroke16Icon} />
         <${IconCopyButton}>LineGraphStroke16Icon<//>
         <${LineSocialStroke16Icon} />
         <${IconCopyButton}>LineSocialStroke16Icon<//>
         <${LinkRemoveStroke16Icon} />
         <${IconCopyButton}>LinkRemoveStroke16Icon<//>
         <${LinkStroke16Icon} />
         <${IconCopyButton}>LinkStroke16Icon<//>
         <${LinkedinStroke16Icon} />
         <${IconCopyButton}>LinkedinStroke16Icon<//>
         <${ListBulletStroke16Icon} />
         <${IconCopyButton}>ListBulletStroke16Icon<//>
         <${ListNumberRtlStroke16Icon} />
         <${IconCopyButton}>ListNumberRtlStroke16Icon<//>
         <${ListNumberStroke16Icon} />
         <${IconCopyButton}>ListNumberStroke16Icon<//>
         <${LocationStroke16Icon} />
         <${IconCopyButton}>LocationStroke16Icon<//>
         <${LockLockedStroke16Icon} />
         <${IconCopyButton}>LockLockedStroke16Icon<//>
         <${LockUnlockedStroke16Icon} />
         <${IconCopyButton}>LockUnlockedStroke16Icon<//>
         <${MarkupStroke16Icon} />
         <${IconCopyButton}>MarkupStroke16Icon<//>
         <${MaximizeStroke16Icon} />
         <${IconCopyButton}>MaximizeStroke16Icon<//>
         <${MegaphoneStroke16Icon} />
         <${IconCopyButton}>MegaphoneStroke16Icon<//>
         <${MenuStroke16Icon} />
         <${IconCopyButton}>MenuStroke16Icon<//>
         <${MessengerStroke16Icon} />
         <${IconCopyButton}>MessengerStroke16Icon<//>
         <${MicrophoneOffStroke16Icon} />
         <${IconCopyButton}>MicrophoneOffStroke16Icon<//>
         <${MicrophoneOnStroke16Icon} />
         <${IconCopyButton}>MicrophoneOnStroke16Icon<//>
         <${MinimizeStroke16Icon} />
         <${IconCopyButton}>MinimizeStroke16Icon<//>
         <${MobilePhoneStroke16Icon} />
         <${IconCopyButton}>MobilePhoneStroke16Icon<//>
         <${MonitorStroke16Icon} />
         <${IconCopyButton}>MonitorStroke16Icon<//>
         <${MultilineStroke16Icon} />
         <${IconCopyButton}>MultilineStroke16Icon<//>
         <${NewWindowStroke16Icon} />
         <${IconCopyButton}>NewWindowStroke16Icon<//>
         <${NotesStroke16Icon} />
         <${IconCopyButton}>NotesStroke16Icon<//>
         <${NotificationStroke16Icon} />
         <${IconCopyButton}>NotificationStroke16Icon<//>
         <${NumberStroke16Icon} />
         <${IconCopyButton}>NumberStroke16Icon<//>
         <${OriginalSizeStroke16Icon} />
         <${IconCopyButton}>OriginalSizeStroke16Icon<//>
         <${OverflowStroke16Icon} />
         <${IconCopyButton}>OverflowStroke16Icon<//>
         <${OverflowVerticalStroke16Icon} />
         <${IconCopyButton}>OverflowVerticalStroke16Icon<//>
         <${PaletteStroke16Icon} />
         <${IconCopyButton}>PaletteStroke16Icon<//>
         <${PanelsStroke16Icon} />
         <${IconCopyButton}>PanelsStroke16Icon<//>
         <${Paperclip16Icon} />
         <${IconCopyButton}>Paperclip16Icon<//>
         <${ParenthesesStroke16Icon} />
         <${IconCopyButton}>ParenthesesStroke16Icon<//>
         <${PauseStroke16Icon} />
         <${IconCopyButton}>PauseStroke16Icon<//>
         <${PencilStroke16Icon} />
         <${IconCopyButton}>PencilStroke16Icon<//>
         <${PhoneCallEndStroke16Icon} />
         <${IconCopyButton}>PhoneCallEndStroke16Icon<//>
         <${PhoneCallInStroke16Icon} />
         <${IconCopyButton}>PhoneCallInStroke16Icon<//>
         <${PhoneCallOutStroke16Icon} />
         <${IconCopyButton}>PhoneCallOutStroke16Icon<//>
         <${PhoneCallPauseStroke16Icon} />
         <${IconCopyButton}>PhoneCallPauseStroke16Icon<//>
         <${PhoneCallSpeakerStroke16Icon} />
         <${IconCopyButton}>PhoneCallSpeakerStroke16Icon<//>
         <${PhoneCallTransferOnlyStroke16Icon} />
         <${IconCopyButton}>PhoneCallTransferOnlyStroke16Icon<//>
         <${PhoneCallTransferStroke16Icon} />
         <${IconCopyButton}>PhoneCallTransferStroke16Icon<//>
         <${PhoneStroke16Icon} />
         <${IconCopyButton}>PhoneStroke16Icon<//>
         <${PinRemoveStroke16Icon} />
         <${IconCopyButton}>PinRemoveStroke16Icon<//>
         <${PinStroke16Icon} />
         <${IconCopyButton}>PinStroke16Icon<//>
         <${PlayCircleStroke16Icon} />
         <${IconCopyButton}>PlayCircleStroke16Icon<//>
         <${PlayStroke16Icon} />
         <${IconCopyButton}>PlayStroke16Icon<//>
         <${PlugStroke16Icon} />
         <${IconCopyButton}>PlugStroke16Icon<//>
         <${PlusCircleStroke16Icon} />
         <${IconCopyButton}>PlusCircleStroke16Icon<//>
         <${PlusStroke16Icon} />
         <${IconCopyButton}>PlusStroke16Icon<//>
         <${PuzzlePieceStroke16Icon} />
         <${IconCopyButton}>PuzzlePieceStroke16Icon<//>
         <${QuestionMarkStroke16Icon} />
         <${IconCopyButton}>QuestionMarkStroke16Icon<//>
         <${QuoteStroke16Icon} />
         <${IconCopyButton}>QuoteStroke16Icon<//>
         <${RearrangeStroke16Icon} />
         <${IconCopyButton}>RearrangeStroke16Icon<//>
         <${RecordStroke16Icon} />
         <${IconCopyButton}>RecordStroke16Icon<//>
         <${ReloadStroke16Icon} />
         <${IconCopyButton}>ReloadStroke16Icon<//>
         <${SandboxStroke16Icon} />
         <${IconCopyButton}>SandboxStroke16Icon<//>
         <${SearchStroke16Icon} />
         <${IconCopyButton}>SearchStroke16Icon<//>
         <${ShapesStroke16Icon} />
         <${IconCopyButton}>ShapesStroke16Icon<//>
         <${ShareStroke16Icon} />
         <${IconCopyButton}>ShareStroke16Icon<//>
         <${ShieldStroke16Icon} />
         <${IconCopyButton}>ShieldStroke16Icon<//>
         <${ShoppingCartStroke16Icon} />
         <${IconCopyButton}>ShoppingCartStroke16Icon<//>
         <${SignpostStroke16Icon} />
         <${IconCopyButton}>SignpostStroke16Icon<//>
         <${SlackStroke16Icon} />
         <${IconCopyButton}>SlackStroke16Icon<//>
         <${SmileSlightStroke16Icon} />
         <${IconCopyButton}>SmileSlightStroke16Icon<//>
         <${SmileyStroke16Icon} />
         <${IconCopyButton}>SmileyStroke16Icon<//>
         <${SortStroke16Icon} />
         <${IconCopyButton}>SortStroke16Icon<//>
         <${SpeechBubbleConversationStroke16Icon} />
         <${IconCopyButton}>SpeechBubbleConversationStroke16Icon<//>
         <${SpeechBubbleLightningBoltStroke16Icon} />
         <${IconCopyButton}>SpeechBubbleLightningBoltStroke16Icon<//>
         <${SpeechBubblePlainStroke16Icon} />
         <${IconCopyButton}>SpeechBubblePlainStroke16Icon<//>
         <${StarStroke16Icon} />
         <${IconCopyButton}>StarStroke16Icon<//>
         <${TableStroke16Icon} />
         <${IconCopyButton}>TableStroke16Icon<//>
         <${TagStroke16Icon} />
         <${IconCopyButton}>TagStroke16Icon<//>
         <${TerminalCliStroke16Icon} />
         <${IconCopyButton}>TerminalCliStroke16Icon<//>
         <${TerminalWindowStroke16Icon} />
         <${IconCopyButton}>TerminalWindowStroke16Icon<//>
         <${TextColorStroke16Icon} />
         <${IconCopyButton}>TextColorStroke16Icon<//>
         <${TextStroke16Icon} />
         <${IconCopyButton}>TextStroke16Icon<//>
         <${ThumbsDownStroke16Icon} />
         <${IconCopyButton}>ThumbsDownStroke16Icon<//>
         <${ThumbsUpStroke16Icon} />
         <${IconCopyButton}>ThumbsUpStroke16Icon<//>
         <${TranslationCreatedStroke16Icon} />
         <${IconCopyButton}>TranslationCreatedStroke16Icon<//>
         <${TranslationDeletedStroke16Icon} />
         <${IconCopyButton}>TranslationDeletedStroke16Icon<//>
         <${TranslationExistsStroke16Icon} />
         <${IconCopyButton}>TranslationExistsStroke16Icon<//>
         <${TranslationOutdatedStroke16Icon} />
         <${IconCopyButton}>TranslationOutdatedStroke16Icon<//>
         <${TranslationUpdatedStroke16Icon} />
         <${IconCopyButton}>TranslationUpdatedStroke16Icon<//>
         <${TrashStroke16Icon} />
         <${IconCopyButton}>TrashStroke16Icon<//>
         <${TwitterStroke16Icon} />
         <${IconCopyButton}>TwitterStroke16Icon<//>
         <${UnderlineStroke16Icon} />
         <${IconCopyButton}>UnderlineStroke16Icon<//>
         <${UploadStroke16Icon} />
         <${IconCopyButton}>UploadStroke16Icon<//>
         <${UserCircleStroke16Icon} />
         <${IconCopyButton}>UserCircleStroke16Icon<//>
         <${UserFollowStroke16Icon} />
         <${IconCopyButton}>UserFollowStroke16Icon<//>
         <${UserGroupStroke16Icon} />
         <${IconCopyButton}>UserGroupStroke16Icon<//>
         <${UserListStroke16Icon} />
         <${IconCopyButton}>UserListStroke16Icon<//>
         <${UserSoloStroke16Icon} />
         <${IconCopyButton}>UserSoloStroke16Icon<//>
         <${UserUnfollowStroke16Icon} />
         <${IconCopyButton}>UserUnfollowStroke16Icon<//>
         <${VoicemailStroke16Icon} />
         <${IconCopyButton}>VoicemailStroke16Icon<//>
         <${VolumeMutedStroke16Icon} />
         <${IconCopyButton}>VolumeMutedStroke16Icon<//>
         <${VolumeUnmutedStroke16Icon} />
         <${IconCopyButton}>VolumeUnmutedStroke16Icon<//>
         <${WechatStroke16Icon} />
         <${IconCopyButton}>WechatStroke16Icon<//>
         <${WhatsappStroke16Icon} />
         <${IconCopyButton}>WhatsappStroke16Icon<//>
         <${WrapLeftStroke16Icon} />
         <${IconCopyButton}>WrapLeftStroke16Icon<//>
         <${WrapRightStroke16Icon} />
         <${IconCopyButton}>WrapRightStroke16Icon<//>
         <${XCircleStroke16Icon} />
         <${IconCopyButton}>XCircleStroke16Icon<//>
         <${XStroke16Icon} />
         <${IconCopyButton}>XStroke16Icon<//>
         <${ZendeskStroke16Icon} />
         <${IconCopyButton}>ZendeskStroke16Icon<//>
      </div>
    `;
  }
}

export default IconsPage;
