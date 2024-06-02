import { ListItem } from "./SearchInput";
import { Typo } from "./Typo";

const SearchListItem = ({nickname, userTag, email, onCLick}) => {
  return (
    <ListItem onClick={onCLick}>
      <Typo $size="0.9rem">{nickname} #{userTag}</Typo>
      <Typo $size="0.8rem" $color="#6a6a6a" $margin="5px 0 0">
        {email}
      </Typo>
    </ListItem>
  );
};

export default SearchListItem;
