import { h } from "@dependable/view";
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
      h(Title, {}, "12px"),
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
        " click on the icon label to copy the import.",
      ),
      h(
        "div",
        { className: columnStyles },
        h(I123Stroke12Icon),
        h(IconCopyButton, {}, "I123Stroke12Icon"),
        h(AdjustStroke12Icon),
        h(IconCopyButton, {}, "AdjustStroke12Icon"),
        h(AlertErrorStroke12Icon),
        h(IconCopyButton, {}, "AlertErrorStroke12Icon"),
        h(AlertWarningStroke12Icon),
        h(IconCopyButton, {}, "AlertWarningStroke12Icon"),
        h(AlignCenterStroke12Icon),
        h(IconCopyButton, {}, "AlignCenterStroke12Icon"),
        h(AlignJustifyStroke12Icon),
        h(IconCopyButton, {}, "AlignJustifyStroke12Icon"),
        h(AlignLeftStroke12Icon),
        h(IconCopyButton, {}, "AlignLeftStroke12Icon"),
        h(AlignRightStroke12Icon),
        h(IconCopyButton, {}, "AlignRightStroke12Icon"),
        h(AltTextStroke12Icon),
        h(IconCopyButton, {}, "AltTextStroke12Icon"),
        h(ArrowLeftSmStroke12Icon),
        h(IconCopyButton, {}, "ArrowLeftSmStroke12Icon"),
        h(ArrowLeftStroke12Icon),
        h(IconCopyButton, {}, "ArrowLeftStroke12Icon"),
        h(ArrowLeftUpStroke12Icon),
        h(IconCopyButton, {}, "ArrowLeftUpStroke12Icon"),
        h(ArrowRetweetStroke12Icon),
        h(IconCopyButton, {}, "ArrowRetweetStroke12Icon"),
        h(ArrowReverseStroke12Icon),
        h(IconCopyButton, {}, "ArrowReverseStroke12Icon"),
        h(ArrowTrendingStroke12Icon),
        h(IconCopyButton, {}, "ArrowTrendingStroke12Icon"),
        h(AsteriskStroke12Icon),
        h(IconCopyButton, {}, "AsteriskStroke12Icon"),
        h(AtStroke12Icon),
        h(IconCopyButton, {}, "AtStroke12Icon"),
        h(BarChartStroke12Icon),
        h(IconCopyButton, {}, "BarChartStroke12Icon"),
        h(BasketballStroke12Icon),
        h(IconCopyButton, {}, "BasketballStroke12Icon"),
        h(BoldStroke12Icon),
        h(IconCopyButton, {}, "BoldStroke12Icon"),
        h(BookClosedStroke12Icon),
        h(IconCopyButton, {}, "BookClosedStroke12Icon"),
        h(BookOpenStroke12Icon),
        h(IconCopyButton, {}, "BookOpenStroke12Icon"),
        h(Box3dStroke12Icon),
        h(IconCopyButton, {}, "Box3dStroke12Icon"),
        h(BuildingStroke12Icon),
        h(IconCopyButton, {}, "BuildingStroke12Icon"),
        h(CalendarStroke12Icon),
        h(IconCopyButton, {}, "CalendarStroke12Icon"),
        h(CameraStroke12Icon),
        h(IconCopyButton, {}, "CameraStroke12Icon"),
        h(CarStroke12Icon),
        h(IconCopyButton, {}, "CarStroke12Icon"),
        h(CenterStroke12Icon),
        h(IconCopyButton, {}, "CenterStroke12Icon"),
        h(CheckBadgeStroke12Icon),
        h(IconCopyButton, {}, "CheckBadgeStroke12Icon"),
        h(CheckBoxDoubleStroke12Icon),
        h(IconCopyButton, {}, "CheckBoxDoubleStroke12Icon"),
        h(CheckBoxStroke12Icon),
        h(IconCopyButton, {}, "CheckBoxStroke12Icon"),
        h(CheckCircleStroke12Icon),
        h(IconCopyButton, {}, "CheckCircleStroke12Icon"),
        h(CheckDoubleStroke12Icon),
        h(IconCopyButton, {}, "CheckDoubleStroke12Icon"),
        h(CheckLgStroke12Icon),
        h(IconCopyButton, {}, "CheckLgStroke12Icon"),
        h(CheckSmStroke12Icon),
        h(IconCopyButton, {}, "CheckSmStroke12Icon"),
        h(ChevronBoxStroke12Icon),
        h(IconCopyButton, {}, "ChevronBoxStroke12Icon"),
        h(ChevronDoubleDownStroke12Icon),
        h(IconCopyButton, {}, "ChevronDoubleDownStroke12Icon"),
        h(ChevronDoubleLeftStroke12Icon),
        h(IconCopyButton, {}, "ChevronDoubleLeftStroke12Icon"),
        h(ChevronDoubleRightStroke12Icon),
        h(IconCopyButton, {}, "ChevronDoubleRightStroke12Icon"),
        h(ChevronDoubleUpStroke12Icon),
        h(IconCopyButton, {}, "ChevronDoubleUpStroke12Icon"),
        h(ChevronDownStroke12Icon),
        h(IconCopyButton, {}, "ChevronDownStroke12Icon"),
        h(ChevronLeftStroke12Icon),
        h(IconCopyButton, {}, "ChevronLeftStroke12Icon"),
        h(ChevronRightStroke12Icon),
        h(IconCopyButton, {}, "ChevronRightStroke12Icon"),
        h(ChevronUpStroke12Icon),
        h(IconCopyButton, {}, "ChevronUpStroke12Icon"),
        h(CircleFullStroke12Icon),
        h(IconCopyButton, {}, "CircleFullStroke12Icon"),
        h(CircleLineStroke12Icon),
        h(IconCopyButton, {}, "CircleLineStroke12Icon"),
        h(CircleSmStroke12Icon),
        h(IconCopyButton, {}, "CircleSmStroke12Icon"),
        h(CircleStroke12Icon),
        h(IconCopyButton, {}, "CircleStroke12Icon"),
        h(ClipboardBlankStroke12Icon),
        h(IconCopyButton, {}, "ClipboardBlankStroke12Icon"),
        h(ClipboardCheckStroke12Icon),
        h(IconCopyButton, {}, "ClipboardCheckStroke12Icon"),
        h(ClipboardListStroke12Icon),
        h(IconCopyButton, {}, "ClipboardListStroke12Icon"),
        h(ClockCycleStroke12Icon),
        h(IconCopyButton, {}, "ClockCycleStroke12Icon"),
        h(ClockInStroke12Icon),
        h(IconCopyButton, {}, "ClockInStroke12Icon"),
        h(ClockOutStroke12Icon),
        h(IconCopyButton, {}, "ClockOutStroke12Icon"),
        h(ClockStroke12Icon),
        h(IconCopyButton, {}, "ClockStroke12Icon"),
        h(CopyStroke12Icon),
        h(IconCopyButton, {}, "CopyStroke12Icon"),
        h(CreditCardStroke12Icon),
        h(IconCopyButton, {}, "CreditCardStroke12Icon"),
        h(CssStroke12Icon),
        h(IconCopyButton, {}, "CssStroke12Icon"),
        h(CursorArrowStroke12Icon),
        h(IconCopyButton, {}, "CursorArrowStroke12Icon"),
        h(CutleryStroke12Icon),
        h(IconCopyButton, {}, "CutleryStroke12Icon"),
        h(DashStroke12Icon),
        h(IconCopyButton, {}, "DashStroke12Icon"),
        h(DatabaseStroke12Icon),
        h(IconCopyButton, {}, "DatabaseStroke12Icon"),
        h(DecimalStroke12Icon),
        h(IconCopyButton, {}, "DecimalStroke12Icon"),
        h(DirectionLtrStroke12Icon),
        h(IconCopyButton, {}, "DirectionLtrStroke12Icon"),
        h(DirectionRtlStroke12Icon),
        h(IconCopyButton, {}, "DirectionRtlStroke12Icon"),
        h(DocumentSearchStroke12Icon),
        h(IconCopyButton, {}, "DocumentSearchStroke12Icon"),
        h(DownloadStroke12Icon),
        h(IconCopyButton, {}, "DownloadStroke12Icon"),
        h(DuplicateStroke12Icon),
        h(IconCopyButton, {}, "DuplicateStroke12Icon"),
        h(EditRedoStroke12Icon),
        h(IconCopyButton, {}, "EditRedoStroke12Icon"),
        h(EditUndoStroke12Icon),
        h(IconCopyButton, {}, "EditUndoStroke12Icon"),
        h(EmailStroke12Icon),
        h(IconCopyButton, {}, "EmailStroke12Icon"),
        h(EraserStroke12Icon),
        h(IconCopyButton, {}, "EraserStroke12Icon"),
        h(ExitStroke12Icon),
        h(IconCopyButton, {}, "ExitStroke12Icon"),
        h(EyeHideStroke12Icon),
        h(IconCopyButton, {}, "EyeHideStroke12Icon"),
        h(EyeStroke12Icon),
        h(IconCopyButton, {}, "EyeStroke12Icon"),
        h(FacebookStroke12Icon),
        h(IconCopyButton, {}, "FacebookStroke12Icon"),
        h(FileDocumentStroke12Icon),
        h(IconCopyButton, {}, "FileDocumentStroke12Icon"),
        h(FileErrorStroke12Icon),
        h(IconCopyButton, {}, "FileErrorStroke12Icon"),
        h(FileGenericStroke12Icon),
        h(IconCopyButton, {}, "FileGenericStroke12Icon"),
        h(FileImageStroke12Icon),
        h(IconCopyButton, {}, "FileImageStroke12Icon"),
        h(FilePdfStroke12Icon),
        h(IconCopyButton, {}, "FilePdfStroke12Icon"),
        h(FilePresentationStroke12Icon),
        h(IconCopyButton, {}, "FilePresentationStroke12Icon"),
        h(FileSpreadsheetStroke12Icon),
        h(IconCopyButton, {}, "FileSpreadsheetStroke12Icon"),
        h(FileZipStroke12Icon),
        h(IconCopyButton, {}, "FileZipStroke12Icon"),
        h(FilterStroke12Icon),
        h(IconCopyButton, {}, "FilterStroke12Icon"),
        h(FlagStroke12Icon),
        h(IconCopyButton, {}, "FlagStroke12Icon"),
        h(FolderClosedStroke12Icon),
        h(IconCopyButton, {}, "FolderClosedStroke12Icon"),
        h(FolderOpenStroke12Icon),
        h(IconCopyButton, {}, "FolderOpenStroke12Icon"),
        h(FullWidthStroke12Icon),
        h(IconCopyButton, {}, "FullWidthStroke12Icon"),
        h(GearStroke12Icon),
        h(IconCopyButton, {}, "GearStroke12Icon"),
        h(GithubStroke12Icon),
        h(IconCopyButton, {}, "GithubStroke12Icon"),
        h(GlobeStroke12Icon),
        h(IconCopyButton, {}, "GlobeStroke12Icon"),
        h(Grid2x2Stroke12Icon),
        h(IconCopyButton, {}, "Grid2x2Stroke12Icon"),
        h(Grid3x3Stroke12Icon),
        h(IconCopyButton, {}, "Grid3x3Stroke12Icon"),
        h(Grip12Icon),
        h(IconCopyButton, {}, "Grip12Icon"),
        h(HeadingStroke12Icon),
        h(IconCopyButton, {}, "HeadingStroke12Icon"),
        h(HeartStroke12Icon),
        h(IconCopyButton, {}, "HeartStroke12Icon"),
        h(HistoryStroke12Icon),
        h(IconCopyButton, {}, "HistoryStroke12Icon"),
        h(HomeStroke12Icon),
        h(IconCopyButton, {}, "HomeStroke12Icon"),
        h(HorizontalRuleStroke12Icon),
        h(IconCopyButton, {}, "HorizontalRuleStroke12Icon"),
        h(ImageStroke12Icon),
        h(IconCopyButton, {}, "ImageStroke12Icon"),
        h(InboxStroke12Icon),
        h(IconCopyButton, {}, "InboxStroke12Icon"),
        h(IndentDecreaseStroke12Icon),
        h(IconCopyButton, {}, "IndentDecreaseStroke12Icon"),
        h(IndentIncreaseStroke12Icon),
        h(IconCopyButton, {}, "IndentIncreaseStroke12Icon"),
        h(InfoStroke12Icon),
        h(IconCopyButton, {}, "InfoStroke12Icon"),
        h(InterlockingRingsStroke12Icon),
        h(IconCopyButton, {}, "InterlockingRingsStroke12Icon"),
        h(ItalicStroke12Icon),
        h(IconCopyButton, {}, "ItalicStroke12Icon"),
        h(LeafStroke12Icon),
        h(IconCopyButton, {}, "LeafStroke12Icon"),
        h(LifesaverStroke12Icon),
        h(IconCopyButton, {}, "LifesaverStroke12Icon"),
        h(LightbulbStroke12Icon),
        h(IconCopyButton, {}, "LightbulbStroke12Icon"),
        h(LightningBoltStroke12Icon),
        h(IconCopyButton, {}, "LightningBoltStroke12Icon"),
        h(LineGraphStroke12Icon),
        h(IconCopyButton, {}, "LineGraphStroke12Icon"),
        h(LineSocialStroke12Icon),
        h(IconCopyButton, {}, "LineSocialStroke12Icon"),
        h(LinkRemoveStroke12Icon),
        h(IconCopyButton, {}, "LinkRemoveStroke12Icon"),
        h(LinkStroke12Icon),
        h(IconCopyButton, {}, "LinkStroke12Icon"),
        h(LinkedinStroke12Icon),
        h(IconCopyButton, {}, "LinkedinStroke12Icon"),
        h(ListBulletStroke12Icon),
        h(IconCopyButton, {}, "ListBulletStroke12Icon"),
        h(ListNumberRtlStroke12Icon),
        h(IconCopyButton, {}, "ListNumberRtlStroke12Icon"),
        h(ListNumberStroke12Icon),
        h(IconCopyButton, {}, "ListNumberStroke12Icon"),
        h(LocationStroke12Icon),
        h(IconCopyButton, {}, "LocationStroke12Icon"),
        h(LockLockedStroke12Icon),
        h(IconCopyButton, {}, "LockLockedStroke12Icon"),
        h(LockUnlockedStroke12Icon),
        h(IconCopyButton, {}, "LockUnlockedStroke12Icon"),
        h(MarkupStroke12Icon),
        h(IconCopyButton, {}, "MarkupStroke12Icon"),
        h(MaximizeStroke12Icon),
        h(IconCopyButton, {}, "MaximizeStroke12Icon"),
        h(MegaphoneStroke12Icon),
        h(IconCopyButton, {}, "MegaphoneStroke12Icon"),
        h(MenuStroke12Icon),
        h(IconCopyButton, {}, "MenuStroke12Icon"),
        h(MessengerStroke12Icon),
        h(IconCopyButton, {}, "MessengerStroke12Icon"),
        h(MicrophoneOffStroke12Icon),
        h(IconCopyButton, {}, "MicrophoneOffStroke12Icon"),
        h(MicrophoneOnStroke12Icon),
        h(IconCopyButton, {}, "MicrophoneOnStroke12Icon"),
        h(MinimizeStroke12Icon),
        h(IconCopyButton, {}, "MinimizeStroke12Icon"),
        h(MobilePhoneStroke12Icon),
        h(IconCopyButton, {}, "MobilePhoneStroke12Icon"),
        h(MonitorStroke12Icon),
        h(IconCopyButton, {}, "MonitorStroke12Icon"),
        h(MultilineStroke12Icon),
        h(IconCopyButton, {}, "MultilineStroke12Icon"),
        h(NewWindowStroke12Icon),
        h(IconCopyButton, {}, "NewWindowStroke12Icon"),
        h(NotesStroke12Icon),
        h(IconCopyButton, {}, "NotesStroke12Icon"),
        h(NotificationStroke12Icon),
        h(IconCopyButton, {}, "NotificationStroke12Icon"),
        h(NumberStroke12Icon),
        h(IconCopyButton, {}, "NumberStroke12Icon"),
        h(OriginalSizeStroke12Icon),
        h(IconCopyButton, {}, "OriginalSizeStroke12Icon"),
        h(OverflowStroke12Icon),
        h(IconCopyButton, {}, "OverflowStroke12Icon"),
        h(OverflowVerticalStroke12Icon),
        h(IconCopyButton, {}, "OverflowVerticalStroke12Icon"),
        h(PaletteStroke12Icon),
        h(IconCopyButton, {}, "PaletteStroke12Icon"),
        h(PanelsStroke12Icon),
        h(IconCopyButton, {}, "PanelsStroke12Icon"),
        h(Paperclip12Icon),
        h(IconCopyButton, {}, "Paperclip12Icon"),
        h(ParenthesesStroke12Icon),
        h(IconCopyButton, {}, "ParenthesesStroke12Icon"),
        h(PauseStroke12Icon),
        h(IconCopyButton, {}, "PauseStroke12Icon"),
        h(PencilStroke12Icon),
        h(IconCopyButton, {}, "PencilStroke12Icon"),
        h(PhoneCallEndStroke12Icon),
        h(IconCopyButton, {}, "PhoneCallEndStroke12Icon"),
        h(PhoneCallInStroke12Icon),
        h(IconCopyButton, {}, "PhoneCallInStroke12Icon"),
        h(PhoneCallOutStroke12Icon),
        h(IconCopyButton, {}, "PhoneCallOutStroke12Icon"),
        h(PhoneCallPauseStroke12Icon),
        h(IconCopyButton, {}, "PhoneCallPauseStroke12Icon"),
        h(PhoneCallSpeakerStroke12Icon),
        h(IconCopyButton, {}, "PhoneCallSpeakerStroke12Icon"),
        h(PhoneCallTransferOnlyStroke12Icon),
        h(IconCopyButton, {}, "PhoneCallTransferOnlyStroke12Icon"),
        h(PhoneCallTransferStroke12Icon),
        h(IconCopyButton, {}, "PhoneCallTransferStroke12Icon"),
        h(PhoneStroke12Icon),
        h(IconCopyButton, {}, "PhoneStroke12Icon"),
        h(PinRemoveStroke12Icon),
        h(IconCopyButton, {}, "PinRemoveStroke12Icon"),
        h(PinStroke12Icon),
        h(IconCopyButton, {}, "PinStroke12Icon"),
        h(PlayCircleStroke12Icon),
        h(IconCopyButton, {}, "PlayCircleStroke12Icon"),
        h(PlayStroke12Icon),
        h(IconCopyButton, {}, "PlayStroke12Icon"),
        h(PlugStroke12Icon),
        h(IconCopyButton, {}, "PlugStroke12Icon"),
        h(PlusCircleStroke12Icon),
        h(IconCopyButton, {}, "PlusCircleStroke12Icon"),
        h(PlusStroke12Icon),
        h(IconCopyButton, {}, "PlusStroke12Icon"),
        h(PuzzlePieceStroke12Icon),
        h(IconCopyButton, {}, "PuzzlePieceStroke12Icon"),
        h(QuestionMarkStroke12Icon),
        h(IconCopyButton, {}, "QuestionMarkStroke12Icon"),
        h(QuoteStroke12Icon),
        h(IconCopyButton, {}, "QuoteStroke12Icon"),
        h(RearrangeStroke12Icon),
        h(IconCopyButton, {}, "RearrangeStroke12Icon"),
        h(RecordStroke12Icon),
        h(IconCopyButton, {}, "RecordStroke12Icon"),
        h(ReloadStroke12Icon),
        h(IconCopyButton, {}, "ReloadStroke12Icon"),
        h(SandboxStroke12Icon),
        h(IconCopyButton, {}, "SandboxStroke12Icon"),
        h(SearchStroke12Icon),
        h(IconCopyButton, {}, "SearchStroke12Icon"),
        h(ShapesStroke12Icon),
        h(IconCopyButton, {}, "ShapesStroke12Icon"),
        h(ShareStroke12Icon),
        h(IconCopyButton, {}, "ShareStroke12Icon"),
        h(ShieldStroke12Icon),
        h(IconCopyButton, {}, "ShieldStroke12Icon"),
        h(ShoppingCartStroke12Icon),
        h(IconCopyButton, {}, "ShoppingCartStroke12Icon"),
        h(SignpostStroke12Icon),
        h(IconCopyButton, {}, "SignpostStroke12Icon"),
        h(SlackStroke12Icon),
        h(IconCopyButton, {}, "SlackStroke12Icon"),
        h(SmileSlightStroke12Icon),
        h(IconCopyButton, {}, "SmileSlightStroke12Icon"),
        h(SmileyStroke12Icon),
        h(IconCopyButton, {}, "SmileyStroke12Icon"),
        h(SortStroke12Icon),
        h(IconCopyButton, {}, "SortStroke12Icon"),
        h(SpeechBubbleConversationStroke12Icon),
        h(IconCopyButton, {}, "SpeechBubbleConversationStroke12Icon"),
        h(SpeechBubbleLightningBoltStroke12Icon),
        h(IconCopyButton, {}, "SpeechBubbleLightningBoltStroke12Icon"),
        h(SpeechBubblePlainStroke12Icon),
        h(IconCopyButton, {}, "SpeechBubblePlainStroke12Icon"),
        h(StarStroke12Icon),
        h(IconCopyButton, {}, "StarStroke12Icon"),
        h(TableStroke12Icon),
        h(IconCopyButton, {}, "TableStroke12Icon"),
        h(TagStroke12Icon),
        h(IconCopyButton, {}, "TagStroke12Icon"),
        h(TerminalCliStroke12Icon),
        h(IconCopyButton, {}, "TerminalCliStroke12Icon"),
        h(TerminalWindowStroke12Icon),
        h(IconCopyButton, {}, "TerminalWindowStroke12Icon"),
        h(TextColorStroke12Icon),
        h(IconCopyButton, {}, "TextColorStroke12Icon"),
        h(TextStroke12Icon),
        h(IconCopyButton, {}, "TextStroke12Icon"),
        h(ThumbsDownStroke12Icon),
        h(IconCopyButton, {}, "ThumbsDownStroke12Icon"),
        h(ThumbsUpStroke12Icon),
        h(IconCopyButton, {}, "ThumbsUpStroke12Icon"),
        h(TranslationCreatedStroke12Icon),
        h(IconCopyButton, {}, "TranslationCreatedStroke12Icon"),
        h(TranslationDeletedStroke12Icon),
        h(IconCopyButton, {}, "TranslationDeletedStroke12Icon"),
        h(TranslationExistsStroke12Icon),
        h(IconCopyButton, {}, "TranslationExistsStroke12Icon"),
        h(TranslationOutdatedStroke12Icon),
        h(IconCopyButton, {}, "TranslationOutdatedStroke12Icon"),
        h(TranslationUpdatedStroke12Icon),
        h(IconCopyButton, {}, "TranslationUpdatedStroke12Icon"),
        h(TrashStroke12Icon),
        h(IconCopyButton, {}, "TrashStroke12Icon"),
        h(TwitterStroke12Icon),
        h(IconCopyButton, {}, "TwitterStroke12Icon"),
        h(UnderlineStroke12Icon),
        h(IconCopyButton, {}, "UnderlineStroke12Icon"),
        h(UploadStroke12Icon),
        h(IconCopyButton, {}, "UploadStroke12Icon"),
        h(UserCircleStroke12Icon),
        h(IconCopyButton, {}, "UserCircleStroke12Icon"),
        h(UserFollowStroke12Icon),
        h(IconCopyButton, {}, "UserFollowStroke12Icon"),
        h(UserGroupStroke12Icon),
        h(IconCopyButton, {}, "UserGroupStroke12Icon"),
        h(UserListStroke12Icon),
        h(IconCopyButton, {}, "UserListStroke12Icon"),
        h(UserSoloStroke12Icon),
        h(IconCopyButton, {}, "UserSoloStroke12Icon"),
        h(UserUnfollowStroke12Icon),
        h(IconCopyButton, {}, "UserUnfollowStroke12Icon"),
        h(VoicemailStroke12Icon),
        h(IconCopyButton, {}, "VoicemailStroke12Icon"),
        h(VolumeMutedStroke12Icon),
        h(IconCopyButton, {}, "VolumeMutedStroke12Icon"),
        h(VolumeUnmutedStroke12Icon),
        h(IconCopyButton, {}, "VolumeUnmutedStroke12Icon"),
        h(WechatStroke12Icon),
        h(IconCopyButton, {}, "WechatStroke12Icon"),
        h(WhatsappStroke12Icon),
        h(IconCopyButton, {}, "WhatsappStroke12Icon"),
        h(WrapLeftStroke12Icon),
        h(IconCopyButton, {}, "WrapLeftStroke12Icon"),
        h(WrapRightStroke12Icon),
        h(IconCopyButton, {}, "WrapRightStroke12Icon"),
        h(XCircleStroke12Icon),
        h(IconCopyButton, {}, "XCircleStroke12Icon"),
        h(XStroke12Icon),
        h(IconCopyButton, {}, "XStroke12Icon"),
        h(ZendeskStroke12Icon),
        h(IconCopyButton, {}, "ZendeskStroke12Icon"),
      ),
    ];
  }
}
