import { html } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import TipIcon from "@dependable/icons/LightbulbStroke12Icon";

import I123Stroke12Icon from "@dependable/icons/I123Stroke12Icon";
import AdjustStroke12Icon from "@dependable/icons/AdjustStroke12Icon";
import AlertErrorStroke12Icon from "@dependable/icons/AlertErrorStroke12Icon";
import AlertWarningStroke12Icon from "@dependable/icons/AlertWarningStroke12Icon";
import AlignCenterStroke12Icon from "@dependable/icons/AlignCenterStroke12Icon";
import AlignJustifyStroke12Icon from "@dependable/icons/AlignJustifyStroke12Icon";
import AlignLeftStroke12Icon from "@dependable/icons/AlignLeftStroke12Icon";
import AlignRightStroke12Icon from "@dependable/icons/AlignRightStroke12Icon";
import AltTextStroke12Icon from "@dependable/icons/AltTextStroke12Icon";
import ArrowLeftSmStroke12Icon from "@dependable/icons/ArrowLeftSmStroke12Icon";
import ArrowLeftStroke12Icon from "@dependable/icons/ArrowLeftStroke12Icon";
import ArrowLeftUpStroke12Icon from "@dependable/icons/ArrowLeftUpStroke12Icon";
import ArrowRetweetStroke12Icon from "@dependable/icons/ArrowRetweetStroke12Icon";
import ArrowReverseStroke12Icon from "@dependable/icons/ArrowReverseStroke12Icon";
import ArrowTrendingStroke12Icon from "@dependable/icons/ArrowTrendingStroke12Icon";
import AsteriskStroke12Icon from "@dependable/icons/AsteriskStroke12Icon";
import AtStroke12Icon from "@dependable/icons/AtStroke12Icon";
import BarChartStroke12Icon from "@dependable/icons/BarChartStroke12Icon";
import BasketballStroke12Icon from "@dependable/icons/BasketballStroke12Icon";
import BoldStroke12Icon from "@dependable/icons/BoldStroke12Icon";
import BookClosedStroke12Icon from "@dependable/icons/BookClosedStroke12Icon";
import BookOpenStroke12Icon from "@dependable/icons/BookOpenStroke12Icon";
import Box3dStroke12Icon from "@dependable/icons/Box3dStroke12Icon";
import BuildingStroke12Icon from "@dependable/icons/BuildingStroke12Icon";
import CalendarStroke12Icon from "@dependable/icons/CalendarStroke12Icon";
import CameraStroke12Icon from "@dependable/icons/CameraStroke12Icon";
import CarStroke12Icon from "@dependable/icons/CarStroke12Icon";
import CenterStroke12Icon from "@dependable/icons/CenterStroke12Icon";
import CheckBadgeStroke12Icon from "@dependable/icons/CheckBadgeStroke12Icon";
import CheckBoxDoubleStroke12Icon from "@dependable/icons/CheckBoxDoubleStroke12Icon";
import CheckBoxStroke12Icon from "@dependable/icons/CheckBoxStroke12Icon";
import CheckCircleStroke12Icon from "@dependable/icons/CheckCircleStroke12Icon";
import CheckDoubleStroke12Icon from "@dependable/icons/CheckDoubleStroke12Icon";
import CheckLgStroke12Icon from "@dependable/icons/CheckLgStroke12Icon";
import CheckSmStroke12Icon from "@dependable/icons/CheckSmStroke12Icon";
import ChevronBoxStroke12Icon from "@dependable/icons/ChevronBoxStroke12Icon";
import ChevronDoubleDownStroke12Icon from "@dependable/icons/ChevronDoubleDownStroke12Icon";
import ChevronDoubleLeftStroke12Icon from "@dependable/icons/ChevronDoubleLeftStroke12Icon";
import ChevronDoubleRightStroke12Icon from "@dependable/icons/ChevronDoubleRightStroke12Icon";
import ChevronDoubleUpStroke12Icon from "@dependable/icons/ChevronDoubleUpStroke12Icon";
import ChevronDownStroke12Icon from "@dependable/icons/ChevronDownStroke12Icon";
import ChevronLeftStroke12Icon from "@dependable/icons/ChevronLeftStroke12Icon";
import ChevronRightStroke12Icon from "@dependable/icons/ChevronRightStroke12Icon";
import ChevronUpStroke12Icon from "@dependable/icons/ChevronUpStroke12Icon";
import CircleFullStroke12Icon from "@dependable/icons/CircleFullStroke12Icon";
import CircleLineStroke12Icon from "@dependable/icons/CircleLineStroke12Icon";
import CircleSmStroke12Icon from "@dependable/icons/CircleSmStroke12Icon";
import CircleStroke12Icon from "@dependable/icons/CircleStroke12Icon";
import ClipboardBlankStroke12Icon from "@dependable/icons/ClipboardBlankStroke12Icon";
import ClipboardCheckStroke12Icon from "@dependable/icons/ClipboardCheckStroke12Icon";
import ClipboardListStroke12Icon from "@dependable/icons/ClipboardListStroke12Icon";
import ClockCycleStroke12Icon from "@dependable/icons/ClockCycleStroke12Icon";
import ClockInStroke12Icon from "@dependable/icons/ClockInStroke12Icon";
import ClockOutStroke12Icon from "@dependable/icons/ClockOutStroke12Icon";
import ClockStroke12Icon from "@dependable/icons/ClockStroke12Icon";
import CopyStroke12Icon from "@dependable/icons/CopyStroke12Icon";
import CreditCardStroke12Icon from "@dependable/icons/CreditCardStroke12Icon";
import CssStroke12Icon from "@dependable/icons/CssStroke12Icon";
import CursorArrowStroke12Icon from "@dependable/icons/CursorArrowStroke12Icon";
import CutleryStroke12Icon from "@dependable/icons/CutleryStroke12Icon";
import DashStroke12Icon from "@dependable/icons/DashStroke12Icon";
import DatabaseStroke12Icon from "@dependable/icons/DatabaseStroke12Icon";
import DecimalStroke12Icon from "@dependable/icons/DecimalStroke12Icon";
import DirectionLtrStroke12Icon from "@dependable/icons/DirectionLtrStroke12Icon";
import DirectionRtlStroke12Icon from "@dependable/icons/DirectionRtlStroke12Icon";
import DocumentSearchStroke12Icon from "@dependable/icons/DocumentSearchStroke12Icon";
import DownloadStroke12Icon from "@dependable/icons/DownloadStroke12Icon";
import DuplicateStroke12Icon from "@dependable/icons/DuplicateStroke12Icon";
import EditRedoStroke12Icon from "@dependable/icons/EditRedoStroke12Icon";
import EditUndoStroke12Icon from "@dependable/icons/EditUndoStroke12Icon";
import EmailStroke12Icon from "@dependable/icons/EmailStroke12Icon";
import EraserStroke12Icon from "@dependable/icons/EraserStroke12Icon";
import ExitStroke12Icon from "@dependable/icons/ExitStroke12Icon";
import EyeHideStroke12Icon from "@dependable/icons/EyeHideStroke12Icon";
import EyeStroke12Icon from "@dependable/icons/EyeStroke12Icon";
import FacebookStroke12Icon from "@dependable/icons/FacebookStroke12Icon";
import FileDocumentStroke12Icon from "@dependable/icons/FileDocumentStroke12Icon";
import FileErrorStroke12Icon from "@dependable/icons/FileErrorStroke12Icon";
import FileGenericStroke12Icon from "@dependable/icons/FileGenericStroke12Icon";
import FileImageStroke12Icon from "@dependable/icons/FileImageStroke12Icon";
import FilePdfStroke12Icon from "@dependable/icons/FilePdfStroke12Icon";
import FilePresentationStroke12Icon from "@dependable/icons/FilePresentationStroke12Icon";
import FileSpreadsheetStroke12Icon from "@dependable/icons/FileSpreadsheetStroke12Icon";
import FileZipStroke12Icon from "@dependable/icons/FileZipStroke12Icon";
import FilterStroke12Icon from "@dependable/icons/FilterStroke12Icon";
import FlagStroke12Icon from "@dependable/icons/FlagStroke12Icon";
import FolderClosedStroke12Icon from "@dependable/icons/FolderClosedStroke12Icon";
import FolderOpenStroke12Icon from "@dependable/icons/FolderOpenStroke12Icon";
import FullWidthStroke12Icon from "@dependable/icons/FullWidthStroke12Icon";
import GearStroke12Icon from "@dependable/icons/GearStroke12Icon";
import GithubStroke12Icon from "@dependable/icons/GithubStroke12Icon";
import GlobeStroke12Icon from "@dependable/icons/GlobeStroke12Icon";
import Grid2x2Stroke12Icon from "@dependable/icons/Grid2x2Stroke12Icon";
import Grid3x3Stroke12Icon from "@dependable/icons/Grid3x3Stroke12Icon";
import Grip12Icon from "@dependable/icons/Grip12Icon";
import HeadingStroke12Icon from "@dependable/icons/HeadingStroke12Icon";
import HeartStroke12Icon from "@dependable/icons/HeartStroke12Icon";
import HistoryStroke12Icon from "@dependable/icons/HistoryStroke12Icon";
import HomeStroke12Icon from "@dependable/icons/HomeStroke12Icon";
import HorizontalRuleStroke12Icon from "@dependable/icons/HorizontalRuleStroke12Icon";
import ImageStroke12Icon from "@dependable/icons/ImageStroke12Icon";
import InboxStroke12Icon from "@dependable/icons/InboxStroke12Icon";
import IndentDecreaseStroke12Icon from "@dependable/icons/IndentDecreaseStroke12Icon";
import IndentIncreaseStroke12Icon from "@dependable/icons/IndentIncreaseStroke12Icon";
import InfoStroke12Icon from "@dependable/icons/InfoStroke12Icon";
import InterlockingRingsStroke12Icon from "@dependable/icons/InterlockingRingsStroke12Icon";
import ItalicStroke12Icon from "@dependable/icons/ItalicStroke12Icon";
import LeafStroke12Icon from "@dependable/icons/LeafStroke12Icon";
import LifesaverStroke12Icon from "@dependable/icons/LifesaverStroke12Icon";
import LightbulbStroke12Icon from "@dependable/icons/LightbulbStroke12Icon";
import LightningBoltStroke12Icon from "@dependable/icons/LightningBoltStroke12Icon";
import LineGraphStroke12Icon from "@dependable/icons/LineGraphStroke12Icon";
import LineSocialStroke12Icon from "@dependable/icons/LineSocialStroke12Icon";
import LinkRemoveStroke12Icon from "@dependable/icons/LinkRemoveStroke12Icon";
import LinkStroke12Icon from "@dependable/icons/LinkStroke12Icon";
import LinkedinStroke12Icon from "@dependable/icons/LinkedinStroke12Icon";
import ListBulletStroke12Icon from "@dependable/icons/ListBulletStroke12Icon";
import ListNumberRtlStroke12Icon from "@dependable/icons/ListNumberRtlStroke12Icon";
import ListNumberStroke12Icon from "@dependable/icons/ListNumberStroke12Icon";
import LocationStroke12Icon from "@dependable/icons/LocationStroke12Icon";
import LockLockedStroke12Icon from "@dependable/icons/LockLockedStroke12Icon";
import LockUnlockedStroke12Icon from "@dependable/icons/LockUnlockedStroke12Icon";
import MarkupStroke12Icon from "@dependable/icons/MarkupStroke12Icon";
import MaximizeStroke12Icon from "@dependable/icons/MaximizeStroke12Icon";
import MegaphoneStroke12Icon from "@dependable/icons/MegaphoneStroke12Icon";
import MenuStroke12Icon from "@dependable/icons/MenuStroke12Icon";
import MessengerStroke12Icon from "@dependable/icons/MessengerStroke12Icon";
import MicrophoneOffStroke12Icon from "@dependable/icons/MicrophoneOffStroke12Icon";
import MicrophoneOnStroke12Icon from "@dependable/icons/MicrophoneOnStroke12Icon";
import MinimizeStroke12Icon from "@dependable/icons/MinimizeStroke12Icon";
import MobilePhoneStroke12Icon from "@dependable/icons/MobilePhoneStroke12Icon";
import MonitorStroke12Icon from "@dependable/icons/MonitorStroke12Icon";
import MultilineStroke12Icon from "@dependable/icons/MultilineStroke12Icon";
import NewWindowStroke12Icon from "@dependable/icons/NewWindowStroke12Icon";
import NotesStroke12Icon from "@dependable/icons/NotesStroke12Icon";
import NotificationStroke12Icon from "@dependable/icons/NotificationStroke12Icon";
import NumberStroke12Icon from "@dependable/icons/NumberStroke12Icon";
import OriginalSizeStroke12Icon from "@dependable/icons/OriginalSizeStroke12Icon";
import OverflowStroke12Icon from "@dependable/icons/OverflowStroke12Icon";
import OverflowVerticalStroke12Icon from "@dependable/icons/OverflowVerticalStroke12Icon";
import PaletteStroke12Icon from "@dependable/icons/PaletteStroke12Icon";
import PanelsStroke12Icon from "@dependable/icons/PanelsStroke12Icon";
import Paperclip12Icon from "@dependable/icons/Paperclip12Icon";
import ParenthesesStroke12Icon from "@dependable/icons/ParenthesesStroke12Icon";
import PauseStroke12Icon from "@dependable/icons/PauseStroke12Icon";
import PencilStroke12Icon from "@dependable/icons/PencilStroke12Icon";
import PhoneCallEndStroke12Icon from "@dependable/icons/PhoneCallEndStroke12Icon";
import PhoneCallInStroke12Icon from "@dependable/icons/PhoneCallInStroke12Icon";
import PhoneCallOutStroke12Icon from "@dependable/icons/PhoneCallOutStroke12Icon";
import PhoneCallPauseStroke12Icon from "@dependable/icons/PhoneCallPauseStroke12Icon";
import PhoneCallSpeakerStroke12Icon from "@dependable/icons/PhoneCallSpeakerStroke12Icon";
import PhoneCallTransferOnlyStroke12Icon from "@dependable/icons/PhoneCallTransferOnlyStroke12Icon";
import PhoneCallTransferStroke12Icon from "@dependable/icons/PhoneCallTransferStroke12Icon";
import PhoneStroke12Icon from "@dependable/icons/PhoneStroke12Icon";
import PinRemoveStroke12Icon from "@dependable/icons/PinRemoveStroke12Icon";
import PinStroke12Icon from "@dependable/icons/PinStroke12Icon";
import PlayCircleStroke12Icon from "@dependable/icons/PlayCircleStroke12Icon";
import PlayStroke12Icon from "@dependable/icons/PlayStroke12Icon";
import PlugStroke12Icon from "@dependable/icons/PlugStroke12Icon";
import PlusCircleStroke12Icon from "@dependable/icons/PlusCircleStroke12Icon";
import PlusStroke12Icon from "@dependable/icons/PlusStroke12Icon";
import PuzzlePieceStroke12Icon from "@dependable/icons/PuzzlePieceStroke12Icon";
import QuestionMarkStroke12Icon from "@dependable/icons/QuestionMarkStroke12Icon";
import QuoteStroke12Icon from "@dependable/icons/QuoteStroke12Icon";
import RearrangeStroke12Icon from "@dependable/icons/RearrangeStroke12Icon";
import RecordStroke12Icon from "@dependable/icons/RecordStroke12Icon";
import ReloadStroke12Icon from "@dependable/icons/ReloadStroke12Icon";
import SandboxStroke12Icon from "@dependable/icons/SandboxStroke12Icon";
import SearchStroke12Icon from "@dependable/icons/SearchStroke12Icon";
import ShapesStroke12Icon from "@dependable/icons/ShapesStroke12Icon";
import ShareStroke12Icon from "@dependable/icons/ShareStroke12Icon";
import ShieldStroke12Icon from "@dependable/icons/ShieldStroke12Icon";
import ShoppingCartStroke12Icon from "@dependable/icons/ShoppingCartStroke12Icon";
import SignpostStroke12Icon from "@dependable/icons/SignpostStroke12Icon";
import SlackStroke12Icon from "@dependable/icons/SlackStroke12Icon";
import SmileSlightStroke12Icon from "@dependable/icons/SmileSlightStroke12Icon";
import SmileyStroke12Icon from "@dependable/icons/SmileyStroke12Icon";
import SortStroke12Icon from "@dependable/icons/SortStroke12Icon";
import SpeechBubbleConversationStroke12Icon from "@dependable/icons/SpeechBubbleConversationStroke12Icon";
import SpeechBubbleLightningBoltStroke12Icon from "@dependable/icons/SpeechBubbleLightningBoltStroke12Icon";
import SpeechBubblePlainStroke12Icon from "@dependable/icons/SpeechBubblePlainStroke12Icon";
import StarStroke12Icon from "@dependable/icons/StarStroke12Icon";
import TableStroke12Icon from "@dependable/icons/TableStroke12Icon";
import TagStroke12Icon from "@dependable/icons/TagStroke12Icon";
import TerminalCliStroke12Icon from "@dependable/icons/TerminalCliStroke12Icon";
import TerminalWindowStroke12Icon from "@dependable/icons/TerminalWindowStroke12Icon";
import TextColorStroke12Icon from "@dependable/icons/TextColorStroke12Icon";
import TextStroke12Icon from "@dependable/icons/TextStroke12Icon";
import ThumbsDownStroke12Icon from "@dependable/icons/ThumbsDownStroke12Icon";
import ThumbsUpStroke12Icon from "@dependable/icons/ThumbsUpStroke12Icon";
import TranslationCreatedStroke12Icon from "@dependable/icons/TranslationCreatedStroke12Icon";
import TranslationDeletedStroke12Icon from "@dependable/icons/TranslationDeletedStroke12Icon";
import TranslationExistsStroke12Icon from "@dependable/icons/TranslationExistsStroke12Icon";
import TranslationOutdatedStroke12Icon from "@dependable/icons/TranslationOutdatedStroke12Icon";
import TranslationUpdatedStroke12Icon from "@dependable/icons/TranslationUpdatedStroke12Icon";
import TrashStroke12Icon from "@dependable/icons/TrashStroke12Icon";
import TwitterStroke12Icon from "@dependable/icons/TwitterStroke12Icon";
import UnderlineStroke12Icon from "@dependable/icons/UnderlineStroke12Icon";
import UploadStroke12Icon from "@dependable/icons/UploadStroke12Icon";
import UserCircleStroke12Icon from "@dependable/icons/UserCircleStroke12Icon";
import UserFollowStroke12Icon from "@dependable/icons/UserFollowStroke12Icon";
import UserGroupStroke12Icon from "@dependable/icons/UserGroupStroke12Icon";
import UserListStroke12Icon from "@dependable/icons/UserListStroke12Icon";
import UserSoloStroke12Icon from "@dependable/icons/UserSoloStroke12Icon";
import UserUnfollowStroke12Icon from "@dependable/icons/UserUnfollowStroke12Icon";
import VoicemailStroke12Icon from "@dependable/icons/VoicemailStroke12Icon";
import VolumeMutedStroke12Icon from "@dependable/icons/VolumeMutedStroke12Icon";
import VolumeUnmutedStroke12Icon from "@dependable/icons/VolumeUnmutedStroke12Icon";
import WechatStroke12Icon from "@dependable/icons/WechatStroke12Icon";
import WhatsappStroke12Icon from "@dependable/icons/WhatsappStroke12Icon";
import WrapLeftStroke12Icon from "@dependable/icons/WrapLeftStroke12Icon";
import WrapRightStroke12Icon from "@dependable/icons/WrapRightStroke12Icon";
import XCircleStroke12Icon from "@dependable/icons/XCircleStroke12Icon";
import XStroke12Icon from "@dependable/icons/XStroke12Icon";
import ZendeskStroke12Icon from "@dependable/icons/ZendeskStroke12Icon";

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
      <${Title}>12px<//>
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
         <${I123Stroke12Icon} />
         <${IconCopyButton}>I123Stroke12Icon<//>
         <${AdjustStroke12Icon} />
         <${IconCopyButton}>AdjustStroke12Icon<//>
         <${AlertErrorStroke12Icon} />
         <${IconCopyButton}>AlertErrorStroke12Icon<//>
         <${AlertWarningStroke12Icon} />
         <${IconCopyButton}>AlertWarningStroke12Icon<//>
         <${AlignCenterStroke12Icon} />
         <${IconCopyButton}>AlignCenterStroke12Icon<//>
         <${AlignJustifyStroke12Icon} />
         <${IconCopyButton}>AlignJustifyStroke12Icon<//>
         <${AlignLeftStroke12Icon} />
         <${IconCopyButton}>AlignLeftStroke12Icon<//>
         <${AlignRightStroke12Icon} />
         <${IconCopyButton}>AlignRightStroke12Icon<//>
         <${AltTextStroke12Icon} />
         <${IconCopyButton}>AltTextStroke12Icon<//>
         <${ArrowLeftSmStroke12Icon} />
         <${IconCopyButton}>ArrowLeftSmStroke12Icon<//>
         <${ArrowLeftStroke12Icon} />
         <${IconCopyButton}>ArrowLeftStroke12Icon<//>
         <${ArrowLeftUpStroke12Icon} />
         <${IconCopyButton}>ArrowLeftUpStroke12Icon<//>
         <${ArrowRetweetStroke12Icon} />
         <${IconCopyButton}>ArrowRetweetStroke12Icon<//>
         <${ArrowReverseStroke12Icon} />
         <${IconCopyButton}>ArrowReverseStroke12Icon<//>
         <${ArrowTrendingStroke12Icon} />
         <${IconCopyButton}>ArrowTrendingStroke12Icon<//>
         <${AsteriskStroke12Icon} />
         <${IconCopyButton}>AsteriskStroke12Icon<//>
         <${AtStroke12Icon} />
         <${IconCopyButton}>AtStroke12Icon<//>
         <${BarChartStroke12Icon} />
         <${IconCopyButton}>BarChartStroke12Icon<//>
         <${BasketballStroke12Icon} />
         <${IconCopyButton}>BasketballStroke12Icon<//>
         <${BoldStroke12Icon} />
         <${IconCopyButton}>BoldStroke12Icon<//>
         <${BookClosedStroke12Icon} />
         <${IconCopyButton}>BookClosedStroke12Icon<//>
         <${BookOpenStroke12Icon} />
         <${IconCopyButton}>BookOpenStroke12Icon<//>
         <${Box3dStroke12Icon} />
         <${IconCopyButton}>Box3dStroke12Icon<//>
         <${BuildingStroke12Icon} />
         <${IconCopyButton}>BuildingStroke12Icon<//>
         <${CalendarStroke12Icon} />
         <${IconCopyButton}>CalendarStroke12Icon<//>
         <${CameraStroke12Icon} />
         <${IconCopyButton}>CameraStroke12Icon<//>
         <${CarStroke12Icon} />
         <${IconCopyButton}>CarStroke12Icon<//>
         <${CenterStroke12Icon} />
         <${IconCopyButton}>CenterStroke12Icon<//>
         <${CheckBadgeStroke12Icon} />
         <${IconCopyButton}>CheckBadgeStroke12Icon<//>
         <${CheckBoxDoubleStroke12Icon} />
         <${IconCopyButton}>CheckBoxDoubleStroke12Icon<//>
         <${CheckBoxStroke12Icon} />
         <${IconCopyButton}>CheckBoxStroke12Icon<//>
         <${CheckCircleStroke12Icon} />
         <${IconCopyButton}>CheckCircleStroke12Icon<//>
         <${CheckDoubleStroke12Icon} />
         <${IconCopyButton}>CheckDoubleStroke12Icon<//>
         <${CheckLgStroke12Icon} />
         <${IconCopyButton}>CheckLgStroke12Icon<//>
         <${CheckSmStroke12Icon} />
         <${IconCopyButton}>CheckSmStroke12Icon<//>
         <${ChevronBoxStroke12Icon} />
         <${IconCopyButton}>ChevronBoxStroke12Icon<//>
         <${ChevronDoubleDownStroke12Icon} />
         <${IconCopyButton}>ChevronDoubleDownStroke12Icon<//>
         <${ChevronDoubleLeftStroke12Icon} />
         <${IconCopyButton}>ChevronDoubleLeftStroke12Icon<//>
         <${ChevronDoubleRightStroke12Icon} />
         <${IconCopyButton}>ChevronDoubleRightStroke12Icon<//>
         <${ChevronDoubleUpStroke12Icon} />
         <${IconCopyButton}>ChevronDoubleUpStroke12Icon<//>
         <${ChevronDownStroke12Icon} />
         <${IconCopyButton}>ChevronDownStroke12Icon<//>
         <${ChevronLeftStroke12Icon} />
         <${IconCopyButton}>ChevronLeftStroke12Icon<//>
         <${ChevronRightStroke12Icon} />
         <${IconCopyButton}>ChevronRightStroke12Icon<//>
         <${ChevronUpStroke12Icon} />
         <${IconCopyButton}>ChevronUpStroke12Icon<//>
         <${CircleFullStroke12Icon} />
         <${IconCopyButton}>CircleFullStroke12Icon<//>
         <${CircleLineStroke12Icon} />
         <${IconCopyButton}>CircleLineStroke12Icon<//>
         <${CircleSmStroke12Icon} />
         <${IconCopyButton}>CircleSmStroke12Icon<//>
         <${CircleStroke12Icon} />
         <${IconCopyButton}>CircleStroke12Icon<//>
         <${ClipboardBlankStroke12Icon} />
         <${IconCopyButton}>ClipboardBlankStroke12Icon<//>
         <${ClipboardCheckStroke12Icon} />
         <${IconCopyButton}>ClipboardCheckStroke12Icon<//>
         <${ClipboardListStroke12Icon} />
         <${IconCopyButton}>ClipboardListStroke12Icon<//>
         <${ClockCycleStroke12Icon} />
         <${IconCopyButton}>ClockCycleStroke12Icon<//>
         <${ClockInStroke12Icon} />
         <${IconCopyButton}>ClockInStroke12Icon<//>
         <${ClockOutStroke12Icon} />
         <${IconCopyButton}>ClockOutStroke12Icon<//>
         <${ClockStroke12Icon} />
         <${IconCopyButton}>ClockStroke12Icon<//>
         <${CopyStroke12Icon} />
         <${IconCopyButton}>CopyStroke12Icon<//>
         <${CreditCardStroke12Icon} />
         <${IconCopyButton}>CreditCardStroke12Icon<//>
         <${CssStroke12Icon} />
         <${IconCopyButton}>CssStroke12Icon<//>
         <${CursorArrowStroke12Icon} />
         <${IconCopyButton}>CursorArrowStroke12Icon<//>
         <${CutleryStroke12Icon} />
         <${IconCopyButton}>CutleryStroke12Icon<//>
         <${DashStroke12Icon} />
         <${IconCopyButton}>DashStroke12Icon<//>
         <${DatabaseStroke12Icon} />
         <${IconCopyButton}>DatabaseStroke12Icon<//>
         <${DecimalStroke12Icon} />
         <${IconCopyButton}>DecimalStroke12Icon<//>
         <${DirectionLtrStroke12Icon} />
         <${IconCopyButton}>DirectionLtrStroke12Icon<//>
         <${DirectionRtlStroke12Icon} />
         <${IconCopyButton}>DirectionRtlStroke12Icon<//>
         <${DocumentSearchStroke12Icon} />
         <${IconCopyButton}>DocumentSearchStroke12Icon<//>
         <${DownloadStroke12Icon} />
         <${IconCopyButton}>DownloadStroke12Icon<//>
         <${DuplicateStroke12Icon} />
         <${IconCopyButton}>DuplicateStroke12Icon<//>
         <${EditRedoStroke12Icon} />
         <${IconCopyButton}>EditRedoStroke12Icon<//>
         <${EditUndoStroke12Icon} />
         <${IconCopyButton}>EditUndoStroke12Icon<//>
         <${EmailStroke12Icon} />
         <${IconCopyButton}>EmailStroke12Icon<//>
         <${EraserStroke12Icon} />
         <${IconCopyButton}>EraserStroke12Icon<//>
         <${ExitStroke12Icon} />
         <${IconCopyButton}>ExitStroke12Icon<//>
         <${EyeHideStroke12Icon} />
         <${IconCopyButton}>EyeHideStroke12Icon<//>
         <${EyeStroke12Icon} />
         <${IconCopyButton}>EyeStroke12Icon<//>
         <${FacebookStroke12Icon} />
         <${IconCopyButton}>FacebookStroke12Icon<//>
         <${FileDocumentStroke12Icon} />
         <${IconCopyButton}>FileDocumentStroke12Icon<//>
         <${FileErrorStroke12Icon} />
         <${IconCopyButton}>FileErrorStroke12Icon<//>
         <${FileGenericStroke12Icon} />
         <${IconCopyButton}>FileGenericStroke12Icon<//>
         <${FileImageStroke12Icon} />
         <${IconCopyButton}>FileImageStroke12Icon<//>
         <${FilePdfStroke12Icon} />
         <${IconCopyButton}>FilePdfStroke12Icon<//>
         <${FilePresentationStroke12Icon} />
         <${IconCopyButton}>FilePresentationStroke12Icon<//>
         <${FileSpreadsheetStroke12Icon} />
         <${IconCopyButton}>FileSpreadsheetStroke12Icon<//>
         <${FileZipStroke12Icon} />
         <${IconCopyButton}>FileZipStroke12Icon<//>
         <${FilterStroke12Icon} />
         <${IconCopyButton}>FilterStroke12Icon<//>
         <${FlagStroke12Icon} />
         <${IconCopyButton}>FlagStroke12Icon<//>
         <${FolderClosedStroke12Icon} />
         <${IconCopyButton}>FolderClosedStroke12Icon<//>
         <${FolderOpenStroke12Icon} />
         <${IconCopyButton}>FolderOpenStroke12Icon<//>
         <${FullWidthStroke12Icon} />
         <${IconCopyButton}>FullWidthStroke12Icon<//>
         <${GearStroke12Icon} />
         <${IconCopyButton}>GearStroke12Icon<//>
         <${GithubStroke12Icon} />
         <${IconCopyButton}>GithubStroke12Icon<//>
         <${GlobeStroke12Icon} />
         <${IconCopyButton}>GlobeStroke12Icon<//>
         <${Grid2x2Stroke12Icon} />
         <${IconCopyButton}>Grid2x2Stroke12Icon<//>
         <${Grid3x3Stroke12Icon} />
         <${IconCopyButton}>Grid3x3Stroke12Icon<//>
         <${Grip12Icon} />
         <${IconCopyButton}>Grip12Icon<//>
         <${HeadingStroke12Icon} />
         <${IconCopyButton}>HeadingStroke12Icon<//>
         <${HeartStroke12Icon} />
         <${IconCopyButton}>HeartStroke12Icon<//>
         <${HistoryStroke12Icon} />
         <${IconCopyButton}>HistoryStroke12Icon<//>
         <${HomeStroke12Icon} />
         <${IconCopyButton}>HomeStroke12Icon<//>
         <${HorizontalRuleStroke12Icon} />
         <${IconCopyButton}>HorizontalRuleStroke12Icon<//>
         <${ImageStroke12Icon} />
         <${IconCopyButton}>ImageStroke12Icon<//>
         <${InboxStroke12Icon} />
         <${IconCopyButton}>InboxStroke12Icon<//>
         <${IndentDecreaseStroke12Icon} />
         <${IconCopyButton}>IndentDecreaseStroke12Icon<//>
         <${IndentIncreaseStroke12Icon} />
         <${IconCopyButton}>IndentIncreaseStroke12Icon<//>
         <${InfoStroke12Icon} />
         <${IconCopyButton}>InfoStroke12Icon<//>
         <${InterlockingRingsStroke12Icon} />
         <${IconCopyButton}>InterlockingRingsStroke12Icon<//>
         <${ItalicStroke12Icon} />
         <${IconCopyButton}>ItalicStroke12Icon<//>
         <${LeafStroke12Icon} />
         <${IconCopyButton}>LeafStroke12Icon<//>
         <${LifesaverStroke12Icon} />
         <${IconCopyButton}>LifesaverStroke12Icon<//>
         <${LightbulbStroke12Icon} />
         <${IconCopyButton}>LightbulbStroke12Icon<//>
         <${LightningBoltStroke12Icon} />
         <${IconCopyButton}>LightningBoltStroke12Icon<//>
         <${LineGraphStroke12Icon} />
         <${IconCopyButton}>LineGraphStroke12Icon<//>
         <${LineSocialStroke12Icon} />
         <${IconCopyButton}>LineSocialStroke12Icon<//>
         <${LinkRemoveStroke12Icon} />
         <${IconCopyButton}>LinkRemoveStroke12Icon<//>
         <${LinkStroke12Icon} />
         <${IconCopyButton}>LinkStroke12Icon<//>
         <${LinkedinStroke12Icon} />
         <${IconCopyButton}>LinkedinStroke12Icon<//>
         <${ListBulletStroke12Icon} />
         <${IconCopyButton}>ListBulletStroke12Icon<//>
         <${ListNumberRtlStroke12Icon} />
         <${IconCopyButton}>ListNumberRtlStroke12Icon<//>
         <${ListNumberStroke12Icon} />
         <${IconCopyButton}>ListNumberStroke12Icon<//>
         <${LocationStroke12Icon} />
         <${IconCopyButton}>LocationStroke12Icon<//>
         <${LockLockedStroke12Icon} />
         <${IconCopyButton}>LockLockedStroke12Icon<//>
         <${LockUnlockedStroke12Icon} />
         <${IconCopyButton}>LockUnlockedStroke12Icon<//>
         <${MarkupStroke12Icon} />
         <${IconCopyButton}>MarkupStroke12Icon<//>
         <${MaximizeStroke12Icon} />
         <${IconCopyButton}>MaximizeStroke12Icon<//>
         <${MegaphoneStroke12Icon} />
         <${IconCopyButton}>MegaphoneStroke12Icon<//>
         <${MenuStroke12Icon} />
         <${IconCopyButton}>MenuStroke12Icon<//>
         <${MessengerStroke12Icon} />
         <${IconCopyButton}>MessengerStroke12Icon<//>
         <${MicrophoneOffStroke12Icon} />
         <${IconCopyButton}>MicrophoneOffStroke12Icon<//>
         <${MicrophoneOnStroke12Icon} />
         <${IconCopyButton}>MicrophoneOnStroke12Icon<//>
         <${MinimizeStroke12Icon} />
         <${IconCopyButton}>MinimizeStroke12Icon<//>
         <${MobilePhoneStroke12Icon} />
         <${IconCopyButton}>MobilePhoneStroke12Icon<//>
         <${MonitorStroke12Icon} />
         <${IconCopyButton}>MonitorStroke12Icon<//>
         <${MultilineStroke12Icon} />
         <${IconCopyButton}>MultilineStroke12Icon<//>
         <${NewWindowStroke12Icon} />
         <${IconCopyButton}>NewWindowStroke12Icon<//>
         <${NotesStroke12Icon} />
         <${IconCopyButton}>NotesStroke12Icon<//>
         <${NotificationStroke12Icon} />
         <${IconCopyButton}>NotificationStroke12Icon<//>
         <${NumberStroke12Icon} />
         <${IconCopyButton}>NumberStroke12Icon<//>
         <${OriginalSizeStroke12Icon} />
         <${IconCopyButton}>OriginalSizeStroke12Icon<//>
         <${OverflowStroke12Icon} />
         <${IconCopyButton}>OverflowStroke12Icon<//>
         <${OverflowVerticalStroke12Icon} />
         <${IconCopyButton}>OverflowVerticalStroke12Icon<//>
         <${PaletteStroke12Icon} />
         <${IconCopyButton}>PaletteStroke12Icon<//>
         <${PanelsStroke12Icon} />
         <${IconCopyButton}>PanelsStroke12Icon<//>
         <${Paperclip12Icon} />
         <${IconCopyButton}>Paperclip12Icon<//>
         <${ParenthesesStroke12Icon} />
         <${IconCopyButton}>ParenthesesStroke12Icon<//>
         <${PauseStroke12Icon} />
         <${IconCopyButton}>PauseStroke12Icon<//>
         <${PencilStroke12Icon} />
         <${IconCopyButton}>PencilStroke12Icon<//>
         <${PhoneCallEndStroke12Icon} />
         <${IconCopyButton}>PhoneCallEndStroke12Icon<//>
         <${PhoneCallInStroke12Icon} />
         <${IconCopyButton}>PhoneCallInStroke12Icon<//>
         <${PhoneCallOutStroke12Icon} />
         <${IconCopyButton}>PhoneCallOutStroke12Icon<//>
         <${PhoneCallPauseStroke12Icon} />
         <${IconCopyButton}>PhoneCallPauseStroke12Icon<//>
         <${PhoneCallSpeakerStroke12Icon} />
         <${IconCopyButton}>PhoneCallSpeakerStroke12Icon<//>
         <${PhoneCallTransferOnlyStroke12Icon} />
         <${IconCopyButton}>PhoneCallTransferOnlyStroke12Icon<//>
         <${PhoneCallTransferStroke12Icon} />
         <${IconCopyButton}>PhoneCallTransferStroke12Icon<//>
         <${PhoneStroke12Icon} />
         <${IconCopyButton}>PhoneStroke12Icon<//>
         <${PinRemoveStroke12Icon} />
         <${IconCopyButton}>PinRemoveStroke12Icon<//>
         <${PinStroke12Icon} />
         <${IconCopyButton}>PinStroke12Icon<//>
         <${PlayCircleStroke12Icon} />
         <${IconCopyButton}>PlayCircleStroke12Icon<//>
         <${PlayStroke12Icon} />
         <${IconCopyButton}>PlayStroke12Icon<//>
         <${PlugStroke12Icon} />
         <${IconCopyButton}>PlugStroke12Icon<//>
         <${PlusCircleStroke12Icon} />
         <${IconCopyButton}>PlusCircleStroke12Icon<//>
         <${PlusStroke12Icon} />
         <${IconCopyButton}>PlusStroke12Icon<//>
         <${PuzzlePieceStroke12Icon} />
         <${IconCopyButton}>PuzzlePieceStroke12Icon<//>
         <${QuestionMarkStroke12Icon} />
         <${IconCopyButton}>QuestionMarkStroke12Icon<//>
         <${QuoteStroke12Icon} />
         <${IconCopyButton}>QuoteStroke12Icon<//>
         <${RearrangeStroke12Icon} />
         <${IconCopyButton}>RearrangeStroke12Icon<//>
         <${RecordStroke12Icon} />
         <${IconCopyButton}>RecordStroke12Icon<//>
         <${ReloadStroke12Icon} />
         <${IconCopyButton}>ReloadStroke12Icon<//>
         <${SandboxStroke12Icon} />
         <${IconCopyButton}>SandboxStroke12Icon<//>
         <${SearchStroke12Icon} />
         <${IconCopyButton}>SearchStroke12Icon<//>
         <${ShapesStroke12Icon} />
         <${IconCopyButton}>ShapesStroke12Icon<//>
         <${ShareStroke12Icon} />
         <${IconCopyButton}>ShareStroke12Icon<//>
         <${ShieldStroke12Icon} />
         <${IconCopyButton}>ShieldStroke12Icon<//>
         <${ShoppingCartStroke12Icon} />
         <${IconCopyButton}>ShoppingCartStroke12Icon<//>
         <${SignpostStroke12Icon} />
         <${IconCopyButton}>SignpostStroke12Icon<//>
         <${SlackStroke12Icon} />
         <${IconCopyButton}>SlackStroke12Icon<//>
         <${SmileSlightStroke12Icon} />
         <${IconCopyButton}>SmileSlightStroke12Icon<//>
         <${SmileyStroke12Icon} />
         <${IconCopyButton}>SmileyStroke12Icon<//>
         <${SortStroke12Icon} />
         <${IconCopyButton}>SortStroke12Icon<//>
         <${SpeechBubbleConversationStroke12Icon} />
         <${IconCopyButton}>SpeechBubbleConversationStroke12Icon<//>
         <${SpeechBubbleLightningBoltStroke12Icon} />
         <${IconCopyButton}>SpeechBubbleLightningBoltStroke12Icon<//>
         <${SpeechBubblePlainStroke12Icon} />
         <${IconCopyButton}>SpeechBubblePlainStroke12Icon<//>
         <${StarStroke12Icon} />
         <${IconCopyButton}>StarStroke12Icon<//>
         <${TableStroke12Icon} />
         <${IconCopyButton}>TableStroke12Icon<//>
         <${TagStroke12Icon} />
         <${IconCopyButton}>TagStroke12Icon<//>
         <${TerminalCliStroke12Icon} />
         <${IconCopyButton}>TerminalCliStroke12Icon<//>
         <${TerminalWindowStroke12Icon} />
         <${IconCopyButton}>TerminalWindowStroke12Icon<//>
         <${TextColorStroke12Icon} />
         <${IconCopyButton}>TextColorStroke12Icon<//>
         <${TextStroke12Icon} />
         <${IconCopyButton}>TextStroke12Icon<//>
         <${ThumbsDownStroke12Icon} />
         <${IconCopyButton}>ThumbsDownStroke12Icon<//>
         <${ThumbsUpStroke12Icon} />
         <${IconCopyButton}>ThumbsUpStroke12Icon<//>
         <${TranslationCreatedStroke12Icon} />
         <${IconCopyButton}>TranslationCreatedStroke12Icon<//>
         <${TranslationDeletedStroke12Icon} />
         <${IconCopyButton}>TranslationDeletedStroke12Icon<//>
         <${TranslationExistsStroke12Icon} />
         <${IconCopyButton}>TranslationExistsStroke12Icon<//>
         <${TranslationOutdatedStroke12Icon} />
         <${IconCopyButton}>TranslationOutdatedStroke12Icon<//>
         <${TranslationUpdatedStroke12Icon} />
         <${IconCopyButton}>TranslationUpdatedStroke12Icon<//>
         <${TrashStroke12Icon} />
         <${IconCopyButton}>TrashStroke12Icon<//>
         <${TwitterStroke12Icon} />
         <${IconCopyButton}>TwitterStroke12Icon<//>
         <${UnderlineStroke12Icon} />
         <${IconCopyButton}>UnderlineStroke12Icon<//>
         <${UploadStroke12Icon} />
         <${IconCopyButton}>UploadStroke12Icon<//>
         <${UserCircleStroke12Icon} />
         <${IconCopyButton}>UserCircleStroke12Icon<//>
         <${UserFollowStroke12Icon} />
         <${IconCopyButton}>UserFollowStroke12Icon<//>
         <${UserGroupStroke12Icon} />
         <${IconCopyButton}>UserGroupStroke12Icon<//>
         <${UserListStroke12Icon} />
         <${IconCopyButton}>UserListStroke12Icon<//>
         <${UserSoloStroke12Icon} />
         <${IconCopyButton}>UserSoloStroke12Icon<//>
         <${UserUnfollowStroke12Icon} />
         <${IconCopyButton}>UserUnfollowStroke12Icon<//>
         <${VoicemailStroke12Icon} />
         <${IconCopyButton}>VoicemailStroke12Icon<//>
         <${VolumeMutedStroke12Icon} />
         <${IconCopyButton}>VolumeMutedStroke12Icon<//>
         <${VolumeUnmutedStroke12Icon} />
         <${IconCopyButton}>VolumeUnmutedStroke12Icon<//>
         <${WechatStroke12Icon} />
         <${IconCopyButton}>WechatStroke12Icon<//>
         <${WhatsappStroke12Icon} />
         <${IconCopyButton}>WhatsappStroke12Icon<//>
         <${WrapLeftStroke12Icon} />
         <${IconCopyButton}>WrapLeftStroke12Icon<//>
         <${WrapRightStroke12Icon} />
         <${IconCopyButton}>WrapRightStroke12Icon<//>
         <${XCircleStroke12Icon} />
         <${IconCopyButton}>XCircleStroke12Icon<//>
         <${XStroke12Icon} />
         <${IconCopyButton}>XStroke12Icon<//>
         <${ZendeskStroke12Icon} />
         <${IconCopyButton}>ZendeskStroke12Icon<//>
      </div>
    `;
  }
}

export default IconsPage;
