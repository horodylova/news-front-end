import React, { useState, useEffect } from "react";
import RecomendIcon from "../../public/icons/recommended-like.svg";
import { patchArticleByVote } from "../../api";

import {
  VotesContainer,
  VotesText,
  RecomendIconStyled,
} from "./VotesSection.styled";

function VotesSection({ article_id, votes }) {
  const [votesCounter, setVotesCounter] = useState(votes);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setVotesCounter(votes);
  }, [votes]);

  function handleVoteIncrease() {
    setIsDisabled(true);
    const currentVotes = votesCounter;
    setVotesCounter(currentVotes + 1);

    patchArticleByVote(article_id, 1).then((data) =>
      setVotesCounter(data.article.votes)
    );
  }

  return (
    <VotesContainer>
      <VotesText>Votes: {votesCounter}</VotesText>
      <RecomendIconStyled
        src={RecomendIcon}
        alt="recomend icon"
        onClick={!isDisabled ? handleVoteIncrease : null}
        disabled={isDisabled} 
      />
    </VotesContainer>
  );
}

export default VotesSection;
