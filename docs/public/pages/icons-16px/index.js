import { h } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import TipIcon from "@dependable/icons/LightbulbStroke12Icon";

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
    align-items: center;
    gap: 1em;
    fill: #bbb;
    margin: 2em 0;
  }
`;

const copyStyles = css`
  & {
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    color: var(--dc-color-foreground);
    font-family: var(--dc-font-family);
  }

  &:focus {
    outline: none;
  }
`;

let interceptCopy;

document.addEventListener("copy", (e) => {
  if (interceptCopy) {
    e.clipboardData.setData("text/plain", interceptCopy);
    e.preventDefault();
  }
});

const copy = (text) => {
  interceptCopy = text;
  document.execCommand("copy");
  interceptCopy = null;
};

class IconCopyButton {
  constructor() {
    this.onClick = () => {
      const name = this.props.children;
      copy(`import ${name} from "@dependable/icons/${name}";`);
    };
  }

  render({ children }) {
    return h(
      "button",
      { onClick: this.onClick, className: copyStyles, title: "Click to copy" },
      children,
    );
  }
}

export default class Page {
  render() {
    return [
      h(Title, {}, "16px"),
      h(
        SubTitle,
        {},
        "These icon components is extracted from ",
        h(
          Anchor,
          { href: "https://garden.zendesk.com/design/icons" },
          "Zendesk Garden",
        ),
        " and turned into components.",
      ),
      h(Line),
      h(
        "p",
        {},
        "Tip ",
        h(TipIcon),
        " click on the icon label to copy the",
        "import to that clipboard.",
      ),
      h(
        "div",
        { className: columnStyles },
        h(I123Stroke16Icon),
        h(IconCopyButton, {}, "I123Stroke16Icon"),
        h(AdjustStroke16Icon),
        h(IconCopyButton, {}, "AdjustStroke16Icon"),
        h(AlertErrorStroke16Icon),
        h(IconCopyButton, {}, "AlertErrorStroke16Icon"),
        h(AlertWarningStroke16Icon),
        h(IconCopyButton, {}, "AlertWarningStroke16Icon"),
        h(AlignCenterStroke16Icon),
        h(IconCopyButton, {}, "AlignCenterStroke16Icon"),
        h(AlignJustifyStroke16Icon),
        h(IconCopyButton, {}, "AlignJustifyStroke16Icon"),
        h(AlignLeftStroke16Icon),
        h(IconCopyButton, {}, "AlignLeftStroke16Icon"),
        h(AlignRightStroke16Icon),
        h(IconCopyButton, {}, "AlignRightStroke16Icon"),
        h(AltTextStroke16Icon),
        h(IconCopyButton, {}, "AltTextStroke16Icon"),
        h(ArrowLeftSmStroke16Icon),
        h(IconCopyButton, {}, "ArrowLeftSmStroke16Icon"),
        h(ArrowLeftStroke16Icon),
        h(IconCopyButton, {}, "ArrowLeftStroke16Icon"),
        h(ArrowLeftUpStroke16Icon),
        h(IconCopyButton, {}, "ArrowLeftUpStroke16Icon"),
        h(ArrowRetweetStroke16Icon),
        h(IconCopyButton, {}, "ArrowRetweetStroke16Icon"),
        h(ArrowReverseStroke16Icon),
        h(IconCopyButton, {}, "ArrowReverseStroke16Icon"),
        h(ArrowTrendingStroke16Icon),
        h(IconCopyButton, {}, "ArrowTrendingStroke16Icon"),
        h(AsteriskStroke16Icon),
        h(IconCopyButton, {}, "AsteriskStroke16Icon"),
        h(AtStroke16Icon),
        h(IconCopyButton, {}, "AtStroke16Icon"),
        h(BarChartStroke16Icon),
        h(IconCopyButton, {}, "BarChartStroke16Icon"),
        h(BasketballStroke16Icon),
        h(IconCopyButton, {}, "BasketballStroke16Icon"),
        h(BoldStroke16Icon),
        h(IconCopyButton, {}, "BoldStroke16Icon"),
        h(BookClosedStroke16Icon),
        h(IconCopyButton, {}, "BookClosedStroke16Icon"),
        h(BookOpenStroke16Icon),
        h(IconCopyButton, {}, "BookOpenStroke16Icon"),
        h(Box3dStroke16Icon),
        h(IconCopyButton, {}, "Box3dStroke16Icon"),
        h(BuildingStroke16Icon),
        h(IconCopyButton, {}, "BuildingStroke16Icon"),
        h(CalendarStroke16Icon),
        h(IconCopyButton, {}, "CalendarStroke16Icon"),
        h(CameraStroke16Icon),
        h(IconCopyButton, {}, "CameraStroke16Icon"),
        h(CarStroke16Icon),
        h(IconCopyButton, {}, "CarStroke16Icon"),
        h(CenterStroke16Icon),
        h(IconCopyButton, {}, "CenterStroke16Icon"),
        h(CheckBadgeStroke16Icon),
        h(IconCopyButton, {}, "CheckBadgeStroke16Icon"),
        h(CheckBoxDoubleStroke16Icon),
        h(IconCopyButton, {}, "CheckBoxDoubleStroke16Icon"),
        h(CheckBoxStroke16Icon),
        h(IconCopyButton, {}, "CheckBoxStroke16Icon"),
        h(CheckCircleStroke16Icon),
        h(IconCopyButton, {}, "CheckCircleStroke16Icon"),
        h(CheckDoubleStroke16Icon),
        h(IconCopyButton, {}, "CheckDoubleStroke16Icon"),
        h(CheckLgStroke16Icon),
        h(IconCopyButton, {}, "CheckLgStroke16Icon"),
        h(CheckSmStroke16Icon),
        h(IconCopyButton, {}, "CheckSmStroke16Icon"),
        h(ChevronBoxStroke16Icon),
        h(IconCopyButton, {}, "ChevronBoxStroke16Icon"),
        h(ChevronDoubleDownStroke16Icon),
        h(IconCopyButton, {}, "ChevronDoubleDownStroke16Icon"),
        h(ChevronDoubleLeftStroke16Icon),
        h(IconCopyButton, {}, "ChevronDoubleLeftStroke16Icon"),
        h(ChevronDoubleRightStroke16Icon),
        h(IconCopyButton, {}, "ChevronDoubleRightStroke16Icon"),
        h(ChevronDoubleUpStroke16Icon),
        h(IconCopyButton, {}, "ChevronDoubleUpStroke16Icon"),
        h(ChevronDownStroke16Icon),
        h(IconCopyButton, {}, "ChevronDownStroke16Icon"),
        h(ChevronLeftStroke16Icon),
        h(IconCopyButton, {}, "ChevronLeftStroke16Icon"),
        h(ChevronRightStroke16Icon),
        h(IconCopyButton, {}, "ChevronRightStroke16Icon"),
        h(ChevronUpStroke16Icon),
        h(IconCopyButton, {}, "ChevronUpStroke16Icon"),
        h(CircleFullStroke16Icon),
        h(IconCopyButton, {}, "CircleFullStroke16Icon"),
        h(CircleLineStroke16Icon),
        h(IconCopyButton, {}, "CircleLineStroke16Icon"),
        h(CircleSmStroke16Icon),
        h(IconCopyButton, {}, "CircleSmStroke16Icon"),
        h(CircleStroke16Icon),
        h(IconCopyButton, {}, "CircleStroke16Icon"),
        h(ClipboardBlankStroke16Icon),
        h(IconCopyButton, {}, "ClipboardBlankStroke16Icon"),
        h(ClipboardCheckStroke16Icon),
        h(IconCopyButton, {}, "ClipboardCheckStroke16Icon"),
        h(ClipboardListStroke16Icon),
        h(IconCopyButton, {}, "ClipboardListStroke16Icon"),
        h(ClockCycleStroke16Icon),
        h(IconCopyButton, {}, "ClockCycleStroke16Icon"),
        h(ClockInStroke16Icon),
        h(IconCopyButton, {}, "ClockInStroke16Icon"),
        h(ClockOutStroke16Icon),
        h(IconCopyButton, {}, "ClockOutStroke16Icon"),
        h(ClockStroke16Icon),
        h(IconCopyButton, {}, "ClockStroke16Icon"),
        h(CopyStroke16Icon),
        h(IconCopyButton, {}, "CopyStroke16Icon"),
        h(CreditCardStroke16Icon),
        h(IconCopyButton, {}, "CreditCardStroke16Icon"),
        h(CssStroke16Icon),
        h(IconCopyButton, {}, "CssStroke16Icon"),
        h(CursorArrowStroke16Icon),
        h(IconCopyButton, {}, "CursorArrowStroke16Icon"),
        h(CutleryStroke16Icon),
        h(IconCopyButton, {}, "CutleryStroke16Icon"),
        h(DashStroke16Icon),
        h(IconCopyButton, {}, "DashStroke16Icon"),
        h(DatabaseStroke16Icon),
        h(IconCopyButton, {}, "DatabaseStroke16Icon"),
        h(DecimalStroke16Icon),
        h(IconCopyButton, {}, "DecimalStroke16Icon"),
        h(DirectionLtrStroke16Icon),
        h(IconCopyButton, {}, "DirectionLtrStroke16Icon"),
        h(DirectionRtlStroke16Icon),
        h(IconCopyButton, {}, "DirectionRtlStroke16Icon"),
        h(DocumentSearchStroke16Icon),
        h(IconCopyButton, {}, "DocumentSearchStroke16Icon"),
        h(DownloadStroke16Icon),
        h(IconCopyButton, {}, "DownloadStroke16Icon"),
        h(DuplicateStroke16Icon),
        h(IconCopyButton, {}, "DuplicateStroke16Icon"),
        h(EditRedoStroke16Icon),
        h(IconCopyButton, {}, "EditRedoStroke16Icon"),
        h(EditUndoStroke16Icon),
        h(IconCopyButton, {}, "EditUndoStroke16Icon"),
        h(EmailStroke16Icon),
        h(IconCopyButton, {}, "EmailStroke16Icon"),
        h(EraserStroke16Icon),
        h(IconCopyButton, {}, "EraserStroke16Icon"),
        h(ExitStroke16Icon),
        h(IconCopyButton, {}, "ExitStroke16Icon"),
        h(EyeHideStroke16Icon),
        h(IconCopyButton, {}, "EyeHideStroke16Icon"),
        h(EyeStroke16Icon),
        h(IconCopyButton, {}, "EyeStroke16Icon"),
        h(FacebookStroke16Icon),
        h(IconCopyButton, {}, "FacebookStroke16Icon"),
        h(FileDocumentStroke16Icon),
        h(IconCopyButton, {}, "FileDocumentStroke16Icon"),
        h(FileErrorStroke16Icon),
        h(IconCopyButton, {}, "FileErrorStroke16Icon"),
        h(FileGenericStroke16Icon),
        h(IconCopyButton, {}, "FileGenericStroke16Icon"),
        h(FileImageStroke16Icon),
        h(IconCopyButton, {}, "FileImageStroke16Icon"),
        h(FilePdfStroke16Icon),
        h(IconCopyButton, {}, "FilePdfStroke16Icon"),
        h(FilePresentationStroke16Icon),
        h(IconCopyButton, {}, "FilePresentationStroke16Icon"),
        h(FileSpreadsheetStroke16Icon),
        h(IconCopyButton, {}, "FileSpreadsheetStroke16Icon"),
        h(FileZipStroke16Icon),
        h(IconCopyButton, {}, "FileZipStroke16Icon"),
        h(FilterStroke16Icon),
        h(IconCopyButton, {}, "FilterStroke16Icon"),
        h(FlagStroke16Icon),
        h(IconCopyButton, {}, "FlagStroke16Icon"),
        h(FolderClosedStroke16Icon),
        h(IconCopyButton, {}, "FolderClosedStroke16Icon"),
        h(FolderOpenStroke16Icon),
        h(IconCopyButton, {}, "FolderOpenStroke16Icon"),
        h(FullWidthStroke16Icon),
        h(IconCopyButton, {}, "FullWidthStroke16Icon"),
        h(GearStroke16Icon),
        h(IconCopyButton, {}, "GearStroke16Icon"),
        h(GithubStroke16Icon),
        h(IconCopyButton, {}, "GithubStroke16Icon"),
        h(GlobeStroke16Icon),
        h(IconCopyButton, {}, "GlobeStroke16Icon"),
        h(Grid2x2Stroke16Icon),
        h(IconCopyButton, {}, "Grid2x2Stroke16Icon"),
        h(Grid3x3Stroke16Icon),
        h(IconCopyButton, {}, "Grid3x3Stroke16Icon"),
        h(Grip16Icon),
        h(IconCopyButton, {}, "Grip16Icon"),
        h(HeadingStroke16Icon),
        h(IconCopyButton, {}, "HeadingStroke16Icon"),
        h(HeartStroke16Icon),
        h(IconCopyButton, {}, "HeartStroke16Icon"),
        h(HistoryStroke16Icon),
        h(IconCopyButton, {}, "HistoryStroke16Icon"),
        h(HomeStroke16Icon),
        h(IconCopyButton, {}, "HomeStroke16Icon"),
        h(HorizontalRuleStroke16Icon),
        h(IconCopyButton, {}, "HorizontalRuleStroke16Icon"),
        h(ImageStroke16Icon),
        h(IconCopyButton, {}, "ImageStroke16Icon"),
        h(InboxStroke16Icon),
        h(IconCopyButton, {}, "InboxStroke16Icon"),
        h(IndentDecreaseStroke16Icon),
        h(IconCopyButton, {}, "IndentDecreaseStroke16Icon"),
        h(IndentIncreaseStroke16Icon),
        h(IconCopyButton, {}, "IndentIncreaseStroke16Icon"),
        h(InfoStroke16Icon),
        h(IconCopyButton, {}, "InfoStroke16Icon"),
        h(InterlockingRingsStroke16Icon),
        h(IconCopyButton, {}, "InterlockingRingsStroke16Icon"),
        h(ItalicStroke16Icon),
        h(IconCopyButton, {}, "ItalicStroke16Icon"),
        h(LeafStroke16Icon),
        h(IconCopyButton, {}, "LeafStroke16Icon"),
        h(LifesaverStroke16Icon),
        h(IconCopyButton, {}, "LifesaverStroke16Icon"),
        h(LightbulbStroke16Icon),
        h(IconCopyButton, {}, "LightbulbStroke16Icon"),
        h(LightningBoltStroke16Icon),
        h(IconCopyButton, {}, "LightningBoltStroke16Icon"),
        h(LineGraphStroke16Icon),
        h(IconCopyButton, {}, "LineGraphStroke16Icon"),
        h(LineSocialStroke16Icon),
        h(IconCopyButton, {}, "LineSocialStroke16Icon"),
        h(LinkRemoveStroke16Icon),
        h(IconCopyButton, {}, "LinkRemoveStroke16Icon"),
        h(LinkStroke16Icon),
        h(IconCopyButton, {}, "LinkStroke16Icon"),
        h(LinkedinStroke16Icon),
        h(IconCopyButton, {}, "LinkedinStroke16Icon"),
        h(ListBulletStroke16Icon),
        h(IconCopyButton, {}, "ListBulletStroke16Icon"),
        h(ListNumberRtlStroke16Icon),
        h(IconCopyButton, {}, "ListNumberRtlStroke16Icon"),
        h(ListNumberStroke16Icon),
        h(IconCopyButton, {}, "ListNumberStroke16Icon"),
        h(LocationStroke16Icon),
        h(IconCopyButton, {}, "LocationStroke16Icon"),
        h(LockLockedStroke16Icon),
        h(IconCopyButton, {}, "LockLockedStroke16Icon"),
        h(LockUnlockedStroke16Icon),
        h(IconCopyButton, {}, "LockUnlockedStroke16Icon"),
        h(MarkupStroke16Icon),
        h(IconCopyButton, {}, "MarkupStroke16Icon"),
        h(MaximizeStroke16Icon),
        h(IconCopyButton, {}, "MaximizeStroke16Icon"),
        h(MegaphoneStroke16Icon),
        h(IconCopyButton, {}, "MegaphoneStroke16Icon"),
        h(MenuStroke16Icon),
        h(IconCopyButton, {}, "MenuStroke16Icon"),
        h(MessengerStroke16Icon),
        h(IconCopyButton, {}, "MessengerStroke16Icon"),
        h(MicrophoneOffStroke16Icon),
        h(IconCopyButton, {}, "MicrophoneOffStroke16Icon"),
        h(MicrophoneOnStroke16Icon),
        h(IconCopyButton, {}, "MicrophoneOnStroke16Icon"),
        h(MinimizeStroke16Icon),
        h(IconCopyButton, {}, "MinimizeStroke16Icon"),
        h(MobilePhoneStroke16Icon),
        h(IconCopyButton, {}, "MobilePhoneStroke16Icon"),
        h(MonitorStroke16Icon),
        h(IconCopyButton, {}, "MonitorStroke16Icon"),
        h(MultilineStroke16Icon),
        h(IconCopyButton, {}, "MultilineStroke16Icon"),
        h(NewWindowStroke16Icon),
        h(IconCopyButton, {}, "NewWindowStroke16Icon"),
        h(NotesStroke16Icon),
        h(IconCopyButton, {}, "NotesStroke16Icon"),
        h(NotificationStroke16Icon),
        h(IconCopyButton, {}, "NotificationStroke16Icon"),
        h(NumberStroke16Icon),
        h(IconCopyButton, {}, "NumberStroke16Icon"),
        h(OriginalSizeStroke16Icon),
        h(IconCopyButton, {}, "OriginalSizeStroke16Icon"),
        h(OverflowStroke16Icon),
        h(IconCopyButton, {}, "OverflowStroke16Icon"),
        h(OverflowVerticalStroke16Icon),
        h(IconCopyButton, {}, "OverflowVerticalStroke16Icon"),
        h(PaletteStroke16Icon),
        h(IconCopyButton, {}, "PaletteStroke16Icon"),
        h(PanelsStroke16Icon),
        h(IconCopyButton, {}, "PanelsStroke16Icon"),
        h(Paperclip16Icon),
        h(IconCopyButton, {}, "Paperclip16Icon"),
        h(ParenthesesStroke16Icon),
        h(IconCopyButton, {}, "ParenthesesStroke16Icon"),
        h(PauseStroke16Icon),
        h(IconCopyButton, {}, "PauseStroke16Icon"),
        h(PencilStroke16Icon),
        h(IconCopyButton, {}, "PencilStroke16Icon"),
        h(PhoneCallEndStroke16Icon),
        h(IconCopyButton, {}, "PhoneCallEndStroke16Icon"),
        h(PhoneCallInStroke16Icon),
        h(IconCopyButton, {}, "PhoneCallInStroke16Icon"),
        h(PhoneCallOutStroke16Icon),
        h(IconCopyButton, {}, "PhoneCallOutStroke16Icon"),
        h(PhoneCallPauseStroke16Icon),
        h(IconCopyButton, {}, "PhoneCallPauseStroke16Icon"),
        h(PhoneCallSpeakerStroke16Icon),
        h(IconCopyButton, {}, "PhoneCallSpeakerStroke16Icon"),
        h(PhoneCallTransferOnlyStroke16Icon),
        h(IconCopyButton, {}, "PhoneCallTransferOnlyStroke16Icon"),
        h(PhoneCallTransferStroke16Icon),
        h(IconCopyButton, {}, "PhoneCallTransferStroke16Icon"),
        h(PhoneStroke16Icon),
        h(IconCopyButton, {}, "PhoneStroke16Icon"),
        h(PinRemoveStroke16Icon),
        h(IconCopyButton, {}, "PinRemoveStroke16Icon"),
        h(PinStroke16Icon),
        h(IconCopyButton, {}, "PinStroke16Icon"),
        h(PlayCircleStroke16Icon),
        h(IconCopyButton, {}, "PlayCircleStroke16Icon"),
        h(PlayStroke16Icon),
        h(IconCopyButton, {}, "PlayStroke16Icon"),
        h(PlugStroke16Icon),
        h(IconCopyButton, {}, "PlugStroke16Icon"),
        h(PlusCircleStroke16Icon),
        h(IconCopyButton, {}, "PlusCircleStroke16Icon"),
        h(PlusStroke16Icon),
        h(IconCopyButton, {}, "PlusStroke16Icon"),
        h(PuzzlePieceStroke16Icon),
        h(IconCopyButton, {}, "PuzzlePieceStroke16Icon"),
        h(QuestionMarkStroke16Icon),
        h(IconCopyButton, {}, "QuestionMarkStroke16Icon"),
        h(QuoteStroke16Icon),
        h(IconCopyButton, {}, "QuoteStroke16Icon"),
        h(RearrangeStroke16Icon),
        h(IconCopyButton, {}, "RearrangeStroke16Icon"),
        h(RecordStroke16Icon),
        h(IconCopyButton, {}, "RecordStroke16Icon"),
        h(ReloadStroke16Icon),
        h(IconCopyButton, {}, "ReloadStroke16Icon"),
        h(SandboxStroke16Icon),
        h(IconCopyButton, {}, "SandboxStroke16Icon"),
        h(SearchStroke16Icon),
        h(IconCopyButton, {}, "SearchStroke16Icon"),
        h(ShapesStroke16Icon),
        h(IconCopyButton, {}, "ShapesStroke16Icon"),
        h(ShareStroke16Icon),
        h(IconCopyButton, {}, "ShareStroke16Icon"),
        h(ShieldStroke16Icon),
        h(IconCopyButton, {}, "ShieldStroke16Icon"),
        h(ShoppingCartStroke16Icon),
        h(IconCopyButton, {}, "ShoppingCartStroke16Icon"),
        h(SignpostStroke16Icon),
        h(IconCopyButton, {}, "SignpostStroke16Icon"),
        h(SlackStroke16Icon),
        h(IconCopyButton, {}, "SlackStroke16Icon"),
        h(SmileSlightStroke16Icon),
        h(IconCopyButton, {}, "SmileSlightStroke16Icon"),
        h(SmileyStroke16Icon),
        h(IconCopyButton, {}, "SmileyStroke16Icon"),
        h(SortStroke16Icon),
        h(IconCopyButton, {}, "SortStroke16Icon"),
        h(SpeechBubbleConversationStroke16Icon),
        h(IconCopyButton, {}, "SpeechBubbleConversationStroke16Icon"),
        h(SpeechBubbleLightningBoltStroke16Icon),
        h(IconCopyButton, {}, "SpeechBubbleLightningBoltStroke16Icon"),
        h(SpeechBubblePlainStroke16Icon),
        h(IconCopyButton, {}, "SpeechBubblePlainStroke16Icon"),
        h(StarStroke16Icon),
        h(IconCopyButton, {}, "StarStroke16Icon"),
        h(TableStroke16Icon),
        h(IconCopyButton, {}, "TableStroke16Icon"),
        h(TagStroke16Icon),
        h(IconCopyButton, {}, "TagStroke16Icon"),
        h(TerminalCliStroke16Icon),
        h(IconCopyButton, {}, "TerminalCliStroke16Icon"),
        h(TerminalWindowStroke16Icon),
        h(IconCopyButton, {}, "TerminalWindowStroke16Icon"),
        h(TextColorStroke16Icon),
        h(IconCopyButton, {}, "TextColorStroke16Icon"),
        h(TextStroke16Icon),
        h(IconCopyButton, {}, "TextStroke16Icon"),
        h(ThumbsDownStroke16Icon),
        h(IconCopyButton, {}, "ThumbsDownStroke16Icon"),
        h(ThumbsUpStroke16Icon),
        h(IconCopyButton, {}, "ThumbsUpStroke16Icon"),
        h(TranslationCreatedStroke16Icon),
        h(IconCopyButton, {}, "TranslationCreatedStroke16Icon"),
        h(TranslationDeletedStroke16Icon),
        h(IconCopyButton, {}, "TranslationDeletedStroke16Icon"),
        h(TranslationExistsStroke16Icon),
        h(IconCopyButton, {}, "TranslationExistsStroke16Icon"),
        h(TranslationOutdatedStroke16Icon),
        h(IconCopyButton, {}, "TranslationOutdatedStroke16Icon"),
        h(TranslationUpdatedStroke16Icon),
        h(IconCopyButton, {}, "TranslationUpdatedStroke16Icon"),
        h(TrashStroke16Icon),
        h(IconCopyButton, {}, "TrashStroke16Icon"),
        h(TwitterStroke16Icon),
        h(IconCopyButton, {}, "TwitterStroke16Icon"),
        h(UnderlineStroke16Icon),
        h(IconCopyButton, {}, "UnderlineStroke16Icon"),
        h(UploadStroke16Icon),
        h(IconCopyButton, {}, "UploadStroke16Icon"),
        h(UserCircleStroke16Icon),
        h(IconCopyButton, {}, "UserCircleStroke16Icon"),
        h(UserFollowStroke16Icon),
        h(IconCopyButton, {}, "UserFollowStroke16Icon"),
        h(UserGroupStroke16Icon),
        h(IconCopyButton, {}, "UserGroupStroke16Icon"),
        h(UserListStroke16Icon),
        h(IconCopyButton, {}, "UserListStroke16Icon"),
        h(UserSoloStroke16Icon),
        h(IconCopyButton, {}, "UserSoloStroke16Icon"),
        h(UserUnfollowStroke16Icon),
        h(IconCopyButton, {}, "UserUnfollowStroke16Icon"),
        h(VoicemailStroke16Icon),
        h(IconCopyButton, {}, "VoicemailStroke16Icon"),
        h(VolumeMutedStroke16Icon),
        h(IconCopyButton, {}, "VolumeMutedStroke16Icon"),
        h(VolumeUnmutedStroke16Icon),
        h(IconCopyButton, {}, "VolumeUnmutedStroke16Icon"),
        h(WechatStroke16Icon),
        h(IconCopyButton, {}, "WechatStroke16Icon"),
        h(WhatsappStroke16Icon),
        h(IconCopyButton, {}, "WhatsappStroke16Icon"),
        h(WrapLeftStroke16Icon),
        h(IconCopyButton, {}, "WrapLeftStroke16Icon"),
        h(WrapRightStroke16Icon),
        h(IconCopyButton, {}, "WrapRightStroke16Icon"),
        h(XCircleStroke16Icon),
        h(IconCopyButton, {}, "XCircleStroke16Icon"),
        h(XStroke16Icon),
        h(IconCopyButton, {}, "XStroke16Icon"),
        h(ZendeskStroke16Icon),
        h(IconCopyButton, {}, "ZendeskStroke16Icon"),
      ),
    ];
  }
}
